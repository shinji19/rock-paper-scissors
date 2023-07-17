import {useEffect, useState} from 'react'
import './App.css'
import {RockPaperScissorsContract} from "./contracts/RockPaperScissorsContract.ts";
import CompetitionTable from "./components/CompetitionTable.tsx";
import {Hand} from "./domains/Hands.ts";
import Button from "@mui/material/Button";
import MessageModal from "./components/MessageModal.tsx";
import {MetaMask} from "./domains/MetaMask.ts";
import {Stack} from "@mui/material";
import CreationModal from "./components/CreationModal.tsx";
import Competition from "./domains/Competition.ts";
import HandSelectionModal from "./components/HandSelectionModal.tsx";

function App() {
    const [walletIsConnected, setWalletIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [competitions, setCompetitions] = useState([] as Competition[]);
    const [creationModalContent, setCreationModalContent] = useState({
        open: false,
        defaultDeposit: "0",
        defaultHandIndex: 0,
        onOK: (_: string, __: Hand) => {},
        onClose: () => {},
    });
    const [handSelectionModalContent, setHandSelectionModalContent] = useState({
        open: false,
        competition: {} as Competition,
        onOK: (_: Hand) => {},
        onClose: () => {},
    });
    const [messageModalContent, setMessageModalContent] = useState({
        open: false,
        onClose: () => {},
        message: "",
        enableButton: true,
    });

    const wallet = new MetaMask();
    const contract = new RockPaperScissorsContract();

    const refreshCompetitions = async () =>{
        // TODO paginate
        setCompetitions(await contract.getCompetitions(0, 1000));
    };

    const closeMessageModal = () => setMessageModalContent({
        ...messageModalContent,
        open: false,
    });

    const openMessageModal = (message: string, enableButton: boolean = true) => {
        const onClose = () => {
            if (!enableButton) return;
            closeMessageModal();
        };
        setMessageModalContent(
            {
                ...messageModalContent,
                open: true,
                onClose: onClose,
                message: message,
                enableButton: enableButton,
            });
    };

    useEffect(() => {
        (async() => {
            try {
                await wallet.validate();
                await refreshCompetitions();
            } catch (e: any) {
                openMessageModal(e.toString());
            }
        })();
    },[]);

    const onClickConnect = () => {
        (async () => {
            try {
                await wallet.validate();
                await wallet.connect();
                setWalletIsConnected(await wallet.isConnected());
                setWalletAddress(await wallet.getAddress());
                await refreshCompetitions();
            } catch (e: any) {
                openMessageModal(e.toString());
            }
        })();
    }

    const onClickCreate = () => {
        setCreationModalContent({
            ...creationModalContent,
            open: true,
            onOK: (depositEth: string, hand: Hand) => {
                setCreationModalContent({
                    ...creationModalContent,
                    open: false,
                });

                (async () => {
                    try {
                        await wallet.validate();
                        contract.connect(await wallet.getSigner());
                        openMessageModal("Processing...", false);
                        await contract.create(hand, depositEth);
                        await refreshCompetitions();
                        closeMessageModal()
                    } catch (e: any) {
                        openMessageModal(e.toString());
                    }
                })();
            },
            onClose: () => setCreationModalContent({
                ...creationModalContent,
                open: false,
            })
        });
    };

    const onClickAction = (competition: Competition) => {
        (async () => {
            contract.connect(await wallet.getSigner());
            openMessageModal("Processing...", false);
            if (competition.status.isOpen())
            {
                setHandSelectionModalContent({
                    ...handSelectionModalContent,
                    open: true,
                    competition: competition,
                    onOK: (hand: Hand) => {
                        setHandSelectionModalContent({
                            ...handSelectionModalContent,
                            open: false,
                        });

                        (async () => {
                            try {
                                await wallet.validate();
                                contract.connect(await wallet.getSigner());
                                openMessageModal("Processing...", false);
                                await contract.entry(
                                    competition.id, hand, competition.deposit);
                                await refreshCompetitions();
                                closeMessageModal()
                            } catch (e: any) {
                                openMessageModal(e.toString());
                            }
                        })();
                    },
                    onClose: () => setHandSelectionModalContent({
                        ...handSelectionModalContent,
                        open: false,
                    })
                });
            }
            else if (competition.status.isEntry())
            {
                await contract.judge(competition.id);
            }
            else if (competition.status.isJudge())
            {
                await contract.close(competition.id);
            }

            closeMessageModal()
            await refreshCompetitions();
        })();
    };

    return (
        <>
            <Stack spacing={2} direction="row" justifyContent="center">
                {
                    walletIsConnected
                        ? (
                            <Button
                                onClick={() => onClickCreate()}
                                variant="contained"
                            >
                                Create
                            </Button>
                        )
                        :(
                            <Button
                                onClick={() => onClickConnect()}
                                variant="contained"
                            >
                                MetaMask connect
                            </Button>
                        )
                }
            </Stack>

            <CompetitionTable
                competitions={competitions}
                walletAddress={walletAddress}
                onClick={onClickAction}
            />
            {
                creationModalContent.open &&
                <CreationModal
                    defaultDeposit={creationModalContent.defaultDeposit}
                    defaultHandIndex={creationModalContent.defaultHandIndex}
                    onOK={creationModalContent.onOK}
                    onClose={creationModalContent.onClose}
                />
            }
            {
                handSelectionModalContent.open &&
                <HandSelectionModal
                    competition={handSelectionModalContent.competition}
                    onOK={handSelectionModalContent.onOK}
                    onClose={handSelectionModalContent.onClose}
                />
            }

            <MessageModal
                open={messageModalContent.open}
                onClose={messageModalContent.onClose}
                message={messageModalContent.message}
                enableButton={messageModalContent.enableButton}
            />
        </>
    )
}

export default App
