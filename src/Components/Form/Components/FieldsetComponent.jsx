import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState, forwardRef } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const FieldsetComponent = forwardRef(({ id, label, name, autoComplete, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={id}
            label={label}
            type={type === "password" && !showPassword ? "password" : "text"}
            name={name}
            autoComplete={autoComplete}
            inputRef={ref}
            {...props}
            InputProps={{
                endAdornment: (
                    type === "password" && (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                edge="end"
                                aria-label="toggle password visibility"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                ),
            }}
        />
    );
});
