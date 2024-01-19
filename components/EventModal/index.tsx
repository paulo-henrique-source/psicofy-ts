import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { Button, DialogActions, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AddServiceForm } from "../AddServiceForm";
import { ScheduleProps } from "../Calendar/types";
import { useFormik } from "formik";

type EventModalProps = {
    open: boolean;
    setOpen: (bool: boolean) => void;
    handleSchedule: (schedule: ScheduleProps) => void;
};

export const EventModal = ({
    open,
    setOpen,
    handleSchedule,
}: EventModalProps) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            time: "00:00",
        },
        onSubmit: ({ name, time }) => {
            const scheduleObject = {
                name,
                time,
            };

            handleSchedule(scheduleObject);
        },
    });

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            maxWidth="sm"
            fullWidth={true}
            aria-labelledby="draggable-dialog-title"
            BackdropProps={{
                classes: {
                    root: "backgroundTransparent",
                },
            }}
        >
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                Agendar atendimento
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <Divider />

            <DialogContent>
                <AddServiceForm formik={formik} />
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button autoFocus onClick={() => formik.handleSubmit()}>
                    Agendar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}
