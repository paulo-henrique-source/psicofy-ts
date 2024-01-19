import React, { useEffect, useState } from "react";
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
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Grid sx={ScheduleContainerProps}>
            <Header
                maxWidth="unset"
                pl={windowSize.width > 431 ? 8 : 0}
                mb={4}
            />
            <CalendarComponent />
        </Grid>
    );
};

export default Schedule;
