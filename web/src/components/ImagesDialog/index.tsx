import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export interface DialogProps {
    open: boolean
    setOpen: Function
}

export default function ImagesDialog(props: DialogProps) {
    function handleCloseImageDialog() {
        props.setOpen(false)
    }

    return (
        <Dialog
            open={props.open}
            onClose={handleCloseImageDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Test dialog</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Lorem ipsum
                </DialogContentText>
            </DialogContent>
            <DialogActions></DialogActions>
        </Dialog>
    )
}
