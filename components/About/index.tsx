import { Grid, SxProps, Typography } from "@mui/material";
import circles from "../../public/img/circles.png";
import butterfly from "../../public/img/butterfly.svg";
import Image from "next/image";
import style from "./sx";

interface componentProps {
    width?: string;
    maxWidth?: string;
}

const About = ({ width, maxWidth }: componentProps) => {
    const pageStyle: SxProps = style.usePageStyle(width, maxWidth);

    return (
        <Grid sx={pageStyle}>
            <Grid sx={style.BlockSectionStyle}>
                <Grid>
                    <Typography sx={style.TitleTextSectionStyle}>
                        Satisfação
                    </Typography>
                    <Typography sx={style.DescriptionTextSectionStyle}>
                        Meu nome é Stephany, sou graduada em psicologia,
                        atualmente atendo o público infantil e adulto. Meu
                        propósito é que as pessoas tenham mais acesso a saúde
                        mental e a qualidade de vida!
                    </Typography>
                </Grid>
                <Grid sx={style.ImageIllustrationContainerStyle}>
                    <Image width={250} src={butterfly} alt="Imagem borboleta" />
                </Grid>
            </Grid>
            <Grid sx={style.BlockSectionStyle}>
                <Grid sx={style.ImageIllustrationContainerStyle}>
                    <Image width={250} src={circles} alt="Imagem círculos" />
                </Grid>
                <Grid>
                    <Typography sx={style.DescriptionTextSectionStyle}>
                        Na psicoterapia você terá uma escuta empática, livre de
                        julgamentos e sigilosa. É por meio das sessões de
                        terapia, que o paciente pode entrar em contato com suas
                        angústias, dificuldades e resssignificar suas vivências.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default About;
