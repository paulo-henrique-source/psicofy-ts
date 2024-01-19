import { Grid, Drawer, List, ListItem, SxProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Link from "next/link";
import style, { IComponentProps } from "./sx";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: any) => ({
    drawerPaper: {
        width: "250px",
        backgroundColor: "#bcad9c",
    },
}));

const Header = ({ mb, pl, width, maxWidth }: IComponentProps) => {
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();
    const pageStyle: SxProps = style.usePageStyle({ mb, pl, width, maxWidth });

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

    function scrollToBottom() {
        if (!isBrowser()) return;

        const bottom = document.documentElement.scrollHeight;
        window.scrollTo({ top: bottom, behavior: "smooth" });
    }

    return (
        <Grid container sx={pageStyle}>
            <Grid
                item
                onClick={handleDrawerOpen}
                sx={style.MenuHambContainerStyle}
                style={{
                    paddingLeft: "24px",
                }}
            >
                ☰
            </Grid>
            <Grid item sx={style.NavBarContainerStyle}>
                <Grid sx={style.ItemNavStyle} onClick={() => router.push("/")}>
                    Home
                </Grid>
                <Grid sx={style.ItemNavStyle} onClick={() => scrollToBottom()}>
                    Serviços
                </Grid>
                <Grid
                    sx={style.ItemNavStyle}
                    onClick={() => router.push("/schedule")}
                >
                    Agenda
                </Grid>
            </Grid>

            <Drawer
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
            >
                <List>
                    <ListItem
                        onClick={handleDrawerClose}
                        style={style.ItemLinkStyle}
                    >
                        <Link href="/">Home</Link>
                    </ListItem>
                    <ListItem
                        onClick={handleDrawerClose}
                        style={style.ItemLinkStyle}
                    >
                        <a onClick={() => scrollToBottom()}>Serviços</a>
                    </ListItem>
                    <ListItem
                        onClick={handleDrawerClose}
                        style={style.ItemLinkStyle}
                    >
                        <Link href="/schedule">Agenda</Link>
                    </ListItem>
                </List>
            </Drawer>
        </Grid>
    );
};

export default Header;
