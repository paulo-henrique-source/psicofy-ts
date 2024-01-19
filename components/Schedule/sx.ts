import { SxProps } from "@mui/system";

const usePageStyle = (width?: string, maxWidth?: string) => {
  return {
    width: width || "100%",
    maxWidth: maxWidth || "1366px",
    p: 5,
    mb: 8,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
};

const TitleSectionTextStyle: SxProps = {
  fontSize: "80px",
  lineHeight: 1.2,
  position: "relative",
  zIndex: 1,
  fontFamily: "Kaushan Script, cursive",
  mr: 5,
};

const ButtonScheduleContainerStyle: SxProps = {
  height: "65px",
  display: "flex",
};

const ButtonScheduleStyle: SxProps = {
  backgroundColor: "#bcad9c",
  borderRadius: "60px",
  padding: "15px 70px 15px 70px",
  color: "white",
  fontWeight: "bold",
  fontSize: "20px",
};

const ArrowScheduleButtonStyle: SxProps = {
  position: "relative",
  top: "-20px",
  left: { md: "250px" },
  transform: "rotate(5deg)",
  width: { xs: "100px", sm: "100px", md: "120px", lg: "120px" },
  height: { xs: "100px", sm: "100px", md: "120px", lg: "120px" },
};

const ConversionTextScheduleStyle: SxProps = {
  fontSize: "22px",
  textAlign: "center",
  position: { lg: "relative", md: "relative" },
  top: { lg: "30px", md: "30px" },
  left: { lg: "80px", md: "80px" },
  maxWidth: { lg: "250px", md: "250px" },
  fontWeight: "bold",
};

const styles = {
  TitleSectionTextStyle,
  ButtonScheduleContainerStyle,
  ButtonScheduleStyle,
  ArrowScheduleButtonStyle,
  ConversionTextScheduleStyle,
  usePageStyle,
};

export default styles;
