import { FormikValues } from "formik";
import * as Styled from "./styles";
import { TextField } from "@mui/material";

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
            <div>
                <TextField
                    id="time"
                    name="time"
                    label="Horario"
                    variant="outlined"
                    type="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    fullWidth
                />
            </div>
        </Styled.Wrapper>
    );
};
