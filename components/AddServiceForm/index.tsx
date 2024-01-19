import { FormikValues } from "formik";
import * as Styled from "./styles";
import { FormHelperText, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

type AddServiceFormProps = {
    formik: FormikValues;
};

export const AddServiceForm = ({ formik }: AddServiceFormProps) => {
    return (
        <Styled.Wrapper>
            <div>
                <TextField
                    id="name"
                    name="name"
                    label="Nome"
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    fullWidth
                />
            </div>
            <div className="time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        name="time"
                        label="Horario"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        minutesStep={30}
                    />
                </LocalizationProvider>
            </div>
            <div>
                <TextField
                    id="password"
                    name="password"
                    label="Senha de atendimento"
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    fullWidth
                />
                <FormHelperText id="component-helper-text">
                    Senha usada para cancelar ou editar o agendamento
                </FormHelperText>
            </div>
        </Styled.Wrapper>
    );
};
