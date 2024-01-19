import { SxProps } from "@mui/system";

export interface IComponentProps {
    mb?: number;
    pl?: number;
    width?: string;
    maxWidth?: string;
}

const usePageStyle = ({ mb, pl, width, maxWidth }: IComponentProps) => {
    return {
        width: width || "100%",
        maxWidth: maxWidth || "1366px",
        pl: pl || 0,
        mb: mb || 0,
        pt: 3,
        boxSizing: "border-box",
        display: "flex",
        gap: 2,
        alignItems: "center",
    };
};

const ItemNavStyle: SxProps = {
    mr: 3,
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    transition: "0.5s all ease",
    "&:hover": {
        borderBottom: "2px solid white",
    },
};

const ItemLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "30px",
};

const MenuHambContainerStyle: SxProps = {
    display: {
        lg: "none",
        md: "none",
        sm: "block",
        xs: "block",
        fontSize: "40px",
    },
};

const NavBarContainerStyle: SxProps = {
    display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
    justifyContent: "start",
};

const navStyles = {
    usePageStyle,
    ItemNavStyle,
    ItemLinkStyle,
    MenuHambContainerStyle,
    NavBarContainerStyle,
};

export default navStyles;
