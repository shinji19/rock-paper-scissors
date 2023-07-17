import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Competition from "../domains/Competition.ts";
import CompetitionTableRow from "./CompetitionTableRow.tsx";

type Props = {
    competitions: Competition[]
    walletAddress: string
    onClick: (competition: Competition) => void;
};

const headerLabels = [
    "id",
    "status",
    "deposit",
    "",
    "host",
    "host hand",
    "opponent",
    "opponent hand",
    "winner",
];

export default function CompetitionTable(props: Props) {
    return (
        <>
            <TableContainer sx={{background: "#999", margin: "auto", width: "100%"}}>
                <Table>
                    <TableHead sx={{background: "#777"}}>
                        <TableRow>
                            {headerLabels.map((value, index) =>{
                                return (
                                    <TableCell key={index}>
                                        {value}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.competitions.map((value, index) =>{
                            return (
                                <CompetitionTableRow
                                    key={index}
                                    competition={value}
                                    walletAddress={props.walletAddress}
                                    onClick={props.onClick}
                                />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
