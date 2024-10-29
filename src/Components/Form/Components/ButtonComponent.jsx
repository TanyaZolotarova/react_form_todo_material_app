import {Button} from "@mui/material";

export function ButtonComponent() {

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='button'
        >
            Sign In
        </Button>
    )
}