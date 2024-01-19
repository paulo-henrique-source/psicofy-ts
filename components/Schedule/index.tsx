import { Button, Grid, SxProps, Typography } from "@mui/material";
import arrow2 from "../../public/img/arrow2.svg";
import Image from "next/image";
import style from "./sx";
import { useRouter } from "next/router";

interface componentProps {
    width?: string;
    maxWidth?: string;
}

const Schedule = ({ width, maxWidth }: componentProps) => {
    const router = useRouter();
    const pageStyle = style.usePageStyle(width, maxWidth);

    return (
        <Grid container sx={pageStyle}>
            <Typography sx={style.TitleSectionTextStyle}>Agenda</Typography>
            <Grid sx={style.ButtonScheduleContainerStyle}>
                <Button
                    sx={style.ButtonScheduleStyle}
                    onClick={() => router.push("/schedule")}
                >
                    Clique aqui
                </Button>
                <Grid sx={style.ArrowScheduleButtonStyle}>
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src={arrow2}
                        alt="Flecha curva"
                    />
                </Grid>
            </Grid>
            <Typography sx={style.ConversionTextScheduleStyle}>
                Para escolher o melhor horário e dia para você
            </Typography>
        </Grid>
    );
};

export default Schedule;
