import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";

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
    open: boolean
    onClose: () => void
    message: string
    enableButton: boolean
};

export default function MessageModal(props: Props) {
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.message}
                    </Typography>
                    {
                        props.enableButton
                        && (<Button onClick={props.onClose} variant="contained">close</Button>)
                    }
                </Box>
            </Modal>
        </div>
    );
}
