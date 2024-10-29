import {Button} from "@mui/material";

export function BtnComponent({text, onClick}){
    return(
            <Button
                onClick={onClick}
                variant="contained"
                style={{
                    backgroundColor: '#a3d133',
                    color: 'white',
                    fontSize: '14px',
                    padding: '8px 16px',
                    marginBottom: '20px',
                }}
                fullWidth
            >
                {text}
            </Button>
    )
}