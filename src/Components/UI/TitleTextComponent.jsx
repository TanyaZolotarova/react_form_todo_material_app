import {Typography} from "@mui/material";
import {memo} from "react";

export const TitleTextComponent = memo(function TitleTextComponent({title}){
    return(
        <Typography variant="h4" align="center" gutterBottom>{title}</Typography>
    )
})