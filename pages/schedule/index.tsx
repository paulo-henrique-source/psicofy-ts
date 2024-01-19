import React from "react";
import { Grid, SxProps } from "@mui/material";
import type { NextPage } from "next";
import Psicologa from "../../public/img/psicologa.png";
import Header from "../../components/Header";
import { CalendarComponent } from "../../components/Calendar";

const ScheduleContainerProps: SxProps = {
    backgroundImage: `url(${Psicologa.src})`,
    backgroundSize: "cover",
    backgroundPosition: { sm: "right top", xs: "right top" },
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
};

const Schedule: NextPage = () => {
    return (
        <Grid sx={ScheduleContainerProps}>
            <Header maxWidth="unset" pl={8} mb={4} />
            <CalendarComponent />
        </Grid>
    );
};

export default Schedule;
