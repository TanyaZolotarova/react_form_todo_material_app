import {TextField} from "@mui/material";
import {memo} from "react";

export const TextFieldComponent = memo(function TextFieldComponent({value, onChange, placeholder}){
    return(
        <>
            <TextField
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                fullWidth
                variant="outlined"
                style={{ marginBottom: '20px' }}
            />
        </>
    )
})