import { SxProps } from "@mui/system";

const usePageStyle = (width?: string, maxWidth?: string) => {
  return {
    width: width || "100%",
    maxWidth: maxWidth || "1366px",
    p: 5,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };
};

const TitleSectionTextStyle: SxProps = {
  fontSize: "40px",
  fontFamily: "Kaushan Script, cursive",
};

const SubTitleSectionTextStyle: SxProps = { fontSize: "22px" };

const SectionContainerServicesStyle: SxProps = {
  display: "flex",
  flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
};

const SectionBoxServiceStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const ServiceTitleStyle: SxProps = { fontSize: "22px" }

const ServiceSubTitleStyle: SxProps = { fontSize: "18px" }

const style = {
  TitleSectionTextStyle,
  SubTitleSectionTextStyle,
  SectionContainerServicesStyle,
  SectionBoxServiceStyle,
  ServiceTitleStyle,
  ServiceSubTitleStyle,
  usePageStyle,
};

export default style;
