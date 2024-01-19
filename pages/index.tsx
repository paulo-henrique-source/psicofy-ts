import { Grid, SxProps } from "@mui/material";
import type { NextPage } from "next";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Schedule from "../components/Schedule";
import Psicologa from "../public/img/psicologa.png";

const MainContainerProps: SxProps = {
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

const Main: NextPage = () => {
    return (
        <>
            <Grid sx={MainContainerProps}>
                <Header />
                <Home />
                <About />
                <Services />
                <Schedule />
            </Grid>
        </>
    );
};

export default Main;
