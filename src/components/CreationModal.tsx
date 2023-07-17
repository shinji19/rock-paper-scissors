import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import {useState} from "react";
import {Hand, Hands} from "../domains/Hands.ts";
import HandSelection from "./HandSelection.tsx";

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
    defaultDeposit: string
    defaultHandIndex: number
    onOK: (deposit: string, hand: Hand) => void
    onClose: () => void
};

export default function CreationModal(props: Props) {
    const hands = Hands;
    const [deposit, setDeposit] = useState(props.defaultDeposit);
    const [hand, setHand] = useState(hands[props.defaultHandIndex]);
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
                        type="number"
                        defaultValue={props.defaultDeposit}
                        onChange={e => setDeposit(e.target.value)}
                    />
                    <HandSelection
                        hands={hands}
                        defaultHandIndex={props.defaultHandIndex}
                        onSelect={(selectedHand) => setHand(selectedHand)} />
                    <Button onClick={props.onClose} variant="contained">cancel</Button>
                    <Button
                        onClick={() => props.onOK(deposit, hand)}
                        variant="contained"
                    >
                        ok
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
