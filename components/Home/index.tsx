import { Grid, SxProps, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import arrowImage from "../../public/img/arrow.png";
import style from "./sx";

interface componentProps {
  width?: string;
  maxWidth?: string;
}

const Home = ({ width, maxWidth }: componentProps) => {
  const pageStyle = style.usePageStyle(width, maxWidth);

  return (
    <Grid sx={pageStyle}>
      <Grid sx={style.NameTitleContainerStyle}>
        <Grid item lg={12} md={12} sm={12}>
          <Typography sx={style.PsychologistTitleStyle}>PSICÓLOGA</Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12}>
          <Typography sx={style.NameTitleStyle}>Stephany C Brito</Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12}>
          <Typography sx={style.CRPTextStyle}>CRP-08/29281</Typography>
        </Grid>
      </Grid>
      <Grid item lg={12} md={12} sm={12} sx={{ pl: 5, mb: 2 }}>
        <Typography sx={style.SubTitleTextStyle}>
          OLÁ, VAMOS FALAR UM POUCO SOBRE PSICOTERAPIA?
        </Typography>
      </Grid>
      <Grid sx={style.SocialMediaContainerStyle}>
        <Grid sx={style.SocialMediaBoxStyle}>
          <WhatsAppIcon sx={style.SocialMediaIconStyle} />
          <InstagramIcon sx={style.SocialMediaIconStyle} />
          <MailOutlineIcon sx={style.SocialMediaIconStyle} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} sx={style.ConversionTextContainerStyle}>
          <Grid sx={style.ConversionTextBoxStyle}>
            <Typography sx={style.ConversionTextStyle}>
              A psicoterapia é um processo ao qual o individuo busca
              suporte/auxilio para lidar com demandas psíquicas que causando
              algum tipo de sofrimento
            </Typography>
          </Grid>
          <Grid sx={style.ArrowContainerStyle}>
            <Image src={arrowImage} alt="Flecha apontada para o texto" />
          </Grid>
          <Grid sx={style.ConversionTextBoxStyle}>
            <Typography sx={style.ConversionTextStyle}>
              Porém não se resume só a isso, a psicoterapia também pode te
              auxiliar no seu desenvolvimento profissional, e na busca do
              autoconhecimento e muito mais.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
