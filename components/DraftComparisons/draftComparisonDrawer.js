import React, { useRef } from 'react';
import { Box, Paper, Grid, Stack, List, Item, Divider, ListItem, DialogTitle, ListItemButton, ListItemIcon, ListItemText, Button, SwipeableDrawer } from '@mui/material';
import styles from '../../pages/Dashboard/Dashboard.module.css';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ComparisonModal from '../Comparisons/twoProductComparison/twocomparisonmodal';
import theme from '../../styles/atlas_theme';
import { Image } from "antd";

export default function DraftComparisonDrawer() {

    const [state, setState] = React.useState({
        Compare: false,
        top: false,
        left: false,
        right: false,
        draftState: false
    });

    // const draftState=false;

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {

            return
        }

        setState({ ...state, [anchor]: open });
    };


    // const handleCloseDrawer = (anchor) => {
    //     toggleDrawer (anchor,false);
    //     draftState = true;
    //     console.log(draftState);
    // } 


    const getSessionData = () => {
        //fetching username from sesstion storage
        return sessionStorage.getItem("Company1 comparison");
    };

    const list = (anchor) => (
        <Box
            sx={{ ml: 0, mr: 0, mb: 0, width: anchor === 'right' || anchor === 'right' ? 'auto' : '100%' }}
            role="presentation"
        >
            <List m={0} p={0} component={Stack} direction="row" sx={{ p: 0, m: 0, width: '100%', background: theme.palette.texthighlightblue }}>
                <ListItem style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    <DialogTitle sx={{ color: theme.palette.white }}>
                        <h2 style={{ fontSize: '18px', color: theme.palette.white }}> Add products to comparison </h2>
                    </DialogTitle>
                </ListItem>
            </List>
            <Paper component={Stack} elevation={1} direction="row" sx={{ justifyContent: 'center', width: '100%', height: 'auto', background: '#fff' }}>


                <List component={Stack} direction="row" sx={{ pb: 0 }}>
                    {['Compare now'].map((text, index) => (
                        <Paper key={"first"} component={Stack} direction="column" elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, pb: 1, pt: 1, width: '100%', alignItems: 'center' }}>
                            <Stack>
                                Category 1
                            </Stack>
                            <Stack>
                               <getSessionData />
                               {/* {window.sessionStorage.getItem("Company1 comparison")} */}

                            </Stack>
                            <Paper key={"first"} component={Stack} direction="row" elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, pb: 1, pt: 1, width: '100%', alignItems: 'center' }}>
                                <Stack elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, pt: 1, mr: 1, width: '50%' }}>
                                    <Button size="large" sx={{
                                        background: '#000003',
                                        fontSize: '12px',
                                        fontFamily: 'Outfit',
                                        padding: '7px 30px 7px 30px',
                                        textTransform: 'none',
                                        borderRadius: "8px",
                                        color: '#fff',
                                        width: '100%',
                                        mr: 1,
                                        mb: 0,
                                        '&:hover': {
                                            border: '2px solid #000003',
                                            color: '#000'
                                        }
                                    }}>
                                        Clear
                                    </Button>
                                </Stack>
                                <Stack elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, pt: 1, ml: 1, width: '100%' }}>
                                    <Button sx={{
                                        background: '#F78500',
                                        borderRadius: "8px",
                                        width: '100%',
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontFamily: 'Outfit',
                                        textTransform: 'none',
                                        padding: '7px 30px 7px 30px',
                                        mb: 0,
                                        mr: 0,
                                        '&:hover': {
                                            outline: '2px solid #000003',
                                            color: '#000',
                                        }
                                    }}>
                                        Compare now
                                    </Button>
                                </Stack>
                            </Paper>
                        </Paper>
                    ))}
                </List>
            </Paper>
            <Divider />
        </Box >
    );

    return (
        <div sx={{}}>
            {['Comparison'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} sx={{ border: '2px solid #1F3180', fontSize: '12px', alignItems: 'flex-end', marginLeft: '1070px', marginTop: '10px' }}>
                        {anchor}
                    </Button>
                    <SwipeableDrawer
                        anchor='right'
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        ModalProps={{
                            keepMounted: false,
                        }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>


                </React.Fragment>
            ))}
        </div>
    );
}