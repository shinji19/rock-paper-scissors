import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Hand, Hands} from "../domains/Hands.ts";
import Competition from "../domains/Competition.ts";
import {TextField} from "@mui/material";
import HandSelection from "./HandSelection.tsx";
import {useState} from "react";
import {ethers} from "ethers";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'gray',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type Props = {
    competition: Competition
    onOK: (hand: Hand) => void
    onClose: () => void
};

export default function HandSelectionModal(props: Props) {
    const hands = Hands;
    const [hand, setHand] = useState(hands[0]);
    const deposit = ethers.formatEther(props.competition.deposit);
    return (
        <div>
            <Modal
                open={true}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    </Typography>
                    <TextField
                        id="outlined-number"
                        label="deposit"
                        defaultValue={deposit}
                        disabled={true}
                    />
                    <HandSelection
                        hands={hands}
                        defaultHandIndex={0}
                        onSelect={(selectedHand) => setHand(selectedHand)} />
                    <Button onClick={props.onClose} variant="contained">cancel</Button>
                    <Button
                        onClick={() => props.onOK(hand)}
                        variant="contained"
                    >
                        ok
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
