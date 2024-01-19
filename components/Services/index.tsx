import { Grid, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import handshake from "../../public/img/handshake.svg";
import computer from "../../public/img/computer.svg";
import style from "./sx";

interface componentProps {
  width?: string;
  maxWidth?: string;
}

const Services = ({ width, maxWidth }: componentProps) => {
  const pageStyles = style.usePageStyle(width, maxWidth);

  return (
    <Grid container sx={pageStyles}>
      <Grid item lg={12} md={12} sm={12}>
        <Typography sx={style.TitleSectionTextStyle}>Serviços</Typography>
      </Grid>
      <Grid>
        <Typography sx={style.SubTitleSectionTextStyle}>
          Espero ajudar você a ressignificar memórias e ter uma vida mais
          significativa.
        </Typography>
      </Grid>
      <Grid sx={style.SectionContainerServicesStyle}>
        <Grid sx={style.SectionBoxServiceStyle}>
          <Typography sx={style.ServiceTitleStyle}>
            Terapia Presencial
          </Typography>
          <Image
            width={100}
            height={90}
            src={handshake}
            alt="Aperto de mãos ícone"
          />
          <Typography sx={style.ServiceSubTitleStyle}>Maringá-PR</Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={style.ServiceTitleStyle}>Terapia Online</Typography>
          <Image
            width={100}
            height={90}
            src={computer}
            alt="Aperto de mãos ícone"
          />
          <Typography sx={style.ServiceSubTitleStyle}>
            Qualquer parte do mundo
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography sx={style.ServiceTitleStyle}>
          Atendimentos para crianças, jovens e adultos.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Services;
