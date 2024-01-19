import { SxProps } from "@mui/system";

const usePageStyle = (width?: string, maxWidth?: string) => {
  return {
    width: width || "100%",
    maxWidth: maxWidth || "1366px",
  };
};

const PsychologistTitleStyle: SxProps = {
  fontFamily: "Archivo Black, sans-serif",
  WebkitTextFillColor: "transparent",
  WebkitTextStroke: "0.19rem rgb(255, 255, 255)",
  fontSize: "clamp(40px, 10vw, 70px)",
  fontWeight: "900",
  lineHeight: 0.8,
};

const NameTitleContainerStyle: SxProps = {
  m: 5,
  pl: 3,
  borderLeft: "3px solid white",
};

const NameTitleStyle: SxProps = {
  fontFamily: "Kaushan Script, cursive",
  fontSize: "clamp(40px, 10vw, 70px)",
  lineHeight: 0.6,
};

const CRPTextStyle: SxProps = {
  fontSize: "20px",
  mt: 4,
};

const SubTitleTextStyle: SxProps = {
  fontSize: "22px",
  fontWeight: "900",
};

const SocialMediaContainerStyle: SxProps = {
  display: "flex",
  flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
  justifyContent: { sm: "center", xs: "center" },
  alignItems: "center",
  pl: 5,
};

const SocialMediaBoxStyle: SxProps = {
  display: "flex",
  flexDirection: {
    lg: "column",
    md: "column",
    sm: "column",
    xs: "row",
  },
  gap: 2,
};

const SocialMediaIconStyle: SxProps = { fontSize: "40px" };

const ConversionTextContainerStyle: SxProps = {
  display: "flex",
  flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
  alignItems: { lg: "center", sm: "center", xs: "center" },
  pl: { lg: 3, md: 2 },
};

const ConversionTextBoxStyle: SxProps = { maxWidth: "400px" };

const ConversionTextStyle: SxProps = {
  fontSize: "clamp(20px, 5vw, 24px)",
};

const ArrowContainerStyle: SxProps = {
  transform: {
    lg: "rotate(0deg)",
    md: "rotate(0deg)",
    sm: "rotate(85deg)",
    xs: "rotate(85deg)",
  },
};

const styles = {
    PsychologistTitleStyle,
    NameTitleContainerStyle,
    NameTitleStyle,
    CRPTextStyle,
    SubTitleTextStyle,
    SocialMediaContainerStyle,
    SocialMediaBoxStyle,
    SocialMediaIconStyle,
    ConversionTextContainerStyle,
    ConversionTextBoxStyle,
    ConversionTextStyle,
    ArrowContainerStyle,
    usePageStyle,
  };
  
  export default styles;