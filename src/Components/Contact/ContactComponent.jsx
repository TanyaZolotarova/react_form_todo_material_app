import {TitleTextComponent} from "../UI/TitleTextComponent";
import {Container} from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from "react";


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export function ContactComponent() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Container maxWidth="xl" style={{marginTop: '50px'}}>
                <TitleTextComponent title={'CONTACT'}/>
                <Box
                    sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{
                            borderRight: 1,
                            borderColor: 'divider',
                            '& .MuiTabs-indicator': {backgroundColor: '#a3d133',},
                        }}
                    >
                        <Tab label="One"{...a11yProps(0)} sx={{
                            '&.Mui-selected': {color: '#a3d133',},
                            '&:not(.Mui-selected)': {color: 'inherit',},
                        }}/>
                        <Tab label="Two"{...a11yProps(1)} sx={{
                            '&.Mui-selected': {color: '#a3d133',},
                            '&:not(.Mui-selected)': {color: 'inherit',},
                        }}/>
                        <Tab label="Three"{...a11yProps(2)} sx={{
                            '&.Mui-selected': {color: '#a3d133',},
                            '&:not(.Mui-selected)': {color: 'inherit',},
                        }}/>
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate mollitia
                        voluptatem!
                        Atque eos eveniet libero natus nemo neque, veritatis!
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        2 Lorem ipsum dolor sit amet. Autem cupiditate mollitia voluptatem!
                        Atque eos eveniet libero natus nemo neque, veritatis! Asperiores eaque enim
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate mollitia
                        voluptatem!
                        Atque eos eveniet libero!
                    </TabPanel>
                </Box>
            </Container>

        </>
    )
}