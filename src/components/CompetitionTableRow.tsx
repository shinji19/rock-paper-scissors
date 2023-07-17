import {Button, TableCell, TableRow} from "@mui/material";
import Competition from "../domains/Competition.ts";
import {ethers} from "ethers";

type Props = {
    competition: Competition
    walletAddress: string
    onClick: (competition: Competition) => void;
}

export default function CompetitionTableRow(props: Props) {
    const {competition, walletAddress, onClick} = props;
    const status = competition.status;
    const enableButton =
        walletAddress !== "" &&
        (
            status.isOpen() && walletAddress !== competition.host
            || status.isEntry() && walletAddress === competition.host
            || status.isJudge() && walletAddress === competition.host
        );
    const hostHandLabel =
        status.isOpen() || status.isEntry() ? "*" : competition.hostHand.label;
    const opponentHandLabel =
        status.isOpen() ? "*" : competition.opponentHand.label;
    return (
        <>
            <TableRow>
                <TableCell>{competition.id}</TableCell>
                <TableCell>{competition.status.label}</TableCell>
                <TableCell>{ethers.formatEther(competition.deposit)}</TableCell>
                <TableCell>
                    {
                        enableButton &&
                        <Button
                            variant="contained"
                            onClick={() => onClick(competition)}
                        >
                            {status.getNext().label}
                        </Button>
                    }
                </TableCell>
                <TableCell>{competition.host}</TableCell>
                <TableCell>{hostHandLabel}</TableCell>
                <TableCell>{competition.opponent}</TableCell>
                <TableCell>{opponentHandLabel}</TableCell>
                <TableCell>{competition.winner}</TableCell>

            </TableRow>
        </>
    )
}
