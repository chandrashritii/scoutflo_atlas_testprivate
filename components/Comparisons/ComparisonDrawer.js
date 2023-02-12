import React, { useRef } from 'react';
import { Box, Paper, Grid, Stack, List, Item, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, SwipeableDrawer } from '@mui/material';
import styles from '../../pages/Dashboard/Dashboard.module.css';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ComparisonModal from './twoProductComparison/twocomparisonmodal';
import theme from '../../styles/atlas_theme';
import { Image } from "antd";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function ComparisonDrawer() {

    const [state, setState] = React.useState({
        Compare: false,
        top: false,
        left: false,
        right: false,
        draftState: false
    });

    const draftState=false;

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


    const handleCloseDrawer = (anchor) => {
        toggleDrawer (anchor,false);
        draftState = true;
        console.log(draftState);
    } 


    const list = (anchor) => (
        <Box
            sx={{ ml: 10, mr: 10, mb: 0, width: anchor === 'bottom' || anchor === 'bottom' ? 'auto' : '100%' }}
            role="presentation"
        >
            <List sx={{ mt: 2, pb: 0 }}>
                <p sx={{ color: '#000', fontSize: '1 rem' }}>Select upto 3 products to compare</p>
            </List>
            <List mt={0} pt={0} component={Stack} direction="row" sx={{ justifyContent: 'left' }}>
                <Button sx={{
                        color: theme.palette.text_transparenthighlight
                }}>
                     <Image
                            className={styles.imageVectorLogo}
                            height={25}
                            src="https://avatars.githubusercontent.com/u/1231870?s=200&v=4"
                            alt=""
                     />
                     <h3 style={{ fontSize: '18px', marginLeft: '10px' }}>CircleCI </h3>
                </Button>
                <div style={{ marginLeft: '20px' }}>
                    <ComparisonModal />
                </div>
                <div style={{ marginLeft: '20px' }}>
                      <ControlPointIcon />
                </div>
            </List>
            <List component={Stack} direction="row" sx={{ pb: 0 }}>
                {['Compare now'].map((text, index) => (
                    <Paper key={"first"} component={Stack} direction="row" elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, pb: 3, pt: 1, width: '100%' }}>
                        <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, pb: 3, pt: 1, mr: 15, width: '50%' }}>
                            <p style={{ color: theme.palette.text_transparenthighlight, fontSize: '1 rem' }}> Products Queue</p>
                        </Paper>
                        <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, pb: 3, pt: 1, mr: 10, ml: 0, width: '50%' }}>
                            <Button size="large" sx={{
                                  border: '2px solid #000003',
                                  fontSize: '14px',
                                  fontFamily: 'Outfit',
                                  padding: '2px 30px 2px 30px',
                                  textTransform: 'none',
                                  borderRadius: "8px",
                                  color: '#000',
                                  width: '40%',
                                  marginRight: '20px'
                            }}>
                                Clear All
                            </Button>
                            <Button sx={{
                                 background: '#F78500',
                                 borderRadius: "8px",
                                 width: '45%',
                                 color: '#fff',
                                 fontSize: '11px',
                                 fontFamily: 'Outfit',
                                 textTransform: 'none',
                                 padding: '1px 30px 1px 30px',
                                 '&:hover': {
                                    outline: '2px solid #000003',
                                    color: '#000',
                                 }
                            }}>
                                <ListItemText primary={text} />
                            </Button>
                        </Paper>
                    </Paper>
                ))}
            </List>
            <Divider />
        </Box >
    );

    return (
        <div>
            {['Compare'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} sx={{ border: '2px solid #000003', fontSize: '11px' }}>
                        <CropSquareIcon style={{ fontSize: '20px', color: '#000003' }} />
                        {anchor}
                    </Button>
                    <SwipeableDrawer
                        anchor='bottom'
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