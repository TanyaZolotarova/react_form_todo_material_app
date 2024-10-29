import {TitleTextComponent} from "../UI/TitleTextComponent";
import {Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";


export function AboutComponent() {
    return (
        <>
            <Container maxWidth="xl" style={{marginTop: '50px'}}>
                <TitleTextComponent title={'ABOUT'}/>
                <Box maxWidth="xl">
                    <Card>
                        <CardMedia
                            component="img"
                            alt="cat"
                            height="400"
                            image="/img/4500_1_01.jpg"
                            style={{objectFit: 'contain'}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Cat
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequatur dolorum facere impedit maiores nam quasi unde vel velit voluptate
                                voluptatibus.
                                Assumenda eum facilis id illum impedit, incidunt numquam sed sit!
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    )
}