import { SxProps } from "@mui/system";

const usePageStyle = (width?: string, maxWidth?: string) => {
    return {
        width: width || "100%",
        maxWidth: maxWidth || "1366px",
        p: 5,
        boxSizing: "border-box",
        mt: 5,
    };
};

const TitleTextSectionStyle: SxProps = {
    fontSize: "40px",
    fontFamily: "Kaushan Script, cursive",
};

const DescriptionTextSectionStyle: SxProps = {
    maxWidth: "500px",
    fontSize: "22px",
};

const BlockSectionStyle: SxProps = {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    mb: { xs: "30px" },
};

const ImageIllustrationContainerStyle: SxProps = {
    display: { lg: "block", md: "block", sm: "block", xs: "none" },
};

const sectionStyles = {
    usePageStyle,
    TitleTextSectionStyle,
    DescriptionTextSectionStyle,
    BlockSectionStyle,
    ImageIllustrationContainerStyle,
};

export default sectionStyles;
