import * as React from 'react';
import Navbar from '../../common/Navbar';
import { Button, Select, Typography, Grid, Paper, Stack, FormControl, Divider, Box, List, ListItem, ListItemText, OutlinedInput, getInitColorSchemeScript } from "@mui/material";
import styles from './ComparisonPage.module.css';
// import { WithContext as ReactTags } from 'react-tag-input';
import theme from '../../styles/atlas_theme';
import Item from '../../common/GridItem';
import FileUploadIcon from '@mui/icons-material/FileUpload';
// import Image from 'mui-image'
import { Image } from "antd";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';

function ComparisonResult() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.cardMain}>
                    <Box className={styles.topbox} >
                        <Grid direction="row" container className={styles.topgrid} sx={{ background: '#fff', mb: 2 }}>
                            <FormControl sx={{ minWidth: '100%', height: 'auto' }}>
                                <List mt={0} pt={0} component={Stack} direction="row" sx={{ m: 0, ml: 1, mt: 1, p: 0 }}>
                                    <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', ml: 1 }} >
                                        <h2 style={{ color: theme.palette.texthighlightgray_subtext, fontSize: '18px' }}> Compare </h2>
                                    </ListItem>
                                    <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} >
                                        <Button sx={{
                                            backgroundColor: '#090A40',
                                            color: '#fff',
                                            fontSize: '13px',
                                            textTransform: 'capitalize',
                                            width: '20%',
                                            mr: 2,
                                            p: 1,
                                            '&:hover': {
                                                border: '2px solid #000003',
                                                color: '#000'
                                            }
                                        }}>
                                            Save
                                        </Button>
                                        <Button sx={{
                                            border: '2px solid #034078',
                                            color: theme.palette.texthighlight_navyblue,
                                            textTransform: 'capitalize',
                                            width: '20%',
                                            fontSize: '13px',
                                            mr: 2
                                        }}>
                                            <FileUploadIcon sx={{ fontSize: '14px' }} /> Share
                                        </Button>
                                    </ListItem>
                                </List>
                                <Divider variant='middle' sx={{ mt: 2, borderBottomWidth: 1 }} />
                            </FormControl>
                            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                <Item elevation={0} sx={{ background: 'transparent' }}>
                                    <Button sx={{
                                        borderRadius: '8px',
                                        color: theme.palette.text_transparenthighlight,
                                        padding: '5px 30px 5px 5px',
                                        width: '360px',
                                        justifyContent: 'left'
                                    }}>
                                        <Image
                                            className={styles.imageVectorLogo}
                                            height={30}
                                            alt=""
                                            src="https://avatars.githubusercontent.com/u/1231870?s=200&v=4"
                                            style={{ padding: '2px' }}
                                            preview={{
                                                visible: false
                                            }}
                                        />
                                        <Typography variant="subtitle1" className={styles.wrapIcon} sx={{ color: '#000', fontSize: "16px", textTransform: 'capitalize', fontWeight: 'bold' }}>
                                            CircleCI
                                            <GitHubIcon sx={{ fontSize: "16px", color: '#ACACAC', ml: 1 }} />
                                            <LanguageIcon sx={{ fontSize: "16px", color: '#ACACAC', ml: 1 }} />
                                        </Typography>
                                        <CloseIcon sx={{ fontSize: '16px', color: '#ACACAC', justifyContent: 'right', fontWeight: 'bold', marginLeft: '33%' }} />
                                    </Button>
                                </Item>
                                <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2, color: theme.palette.icon_highlightgray, height: '80%' }} />
                                <Item elevation={0} sx={{ background: 'transparent' }}>
                                    <Button sx={{
                                        borderRadius: '8px',
                                        color: theme.palette.text_transparenthighlight,
                                        padding: '20px 30px 20px 5px',
                                        width: '360px',
                                        justifyContent: 'left'
                                    }}>
                                        <CropSquareIcon sx={{ fontSize: '35px', mr: 1, color: theme.palette.icon_highlightgray }} />
                                        <Typography variant="subtitle1" className={styles.wrapIcon} sx={{ color: '#000', fontSize: "16px", textTransform: 'capitalize', fontWeight: 'bold' }}>
                                            Product 1
                                            <GitHubIcon sx={{ fontSize: "16px", color: '#ACACAC', ml: 1 }} />
                                            <LanguageIcon sx={{ fontSize: "16px", color: '#ACACAC', ml: 1 }} />
                                        </Typography>
                                        <CloseIcon sx={{ fontSize: '16px', color: '#ACACAC', justifyContent: 'right', fontWeight: 'bold', ml: '33%' }} />
                                    </Button>
                                </Item>
                                <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2, color: theme.palette.icon_highlightgray, height: '80%' }} />
                                <Item elevation={0} sx={{ background: 'transparent' }}>
                                    <Button sx={{
                                        borderRadius: '8px',
                                        color: theme.palette.text_transparenthighlight,
                                        padding: '20px 30px 20px 30px',
                                        width: '360px',
                                        justifyContent: 'left'
                                    }}>
                                        <CropSquareIcon sx={{ fontSize: '35px', mr: 1, color: theme.palette.icon_highlightgray }} />
                                        <Typography variant="subtitle1" className={styles.wrapIcon} sx={{ color: '#000', fontSize: "16px", textTransform: 'capitalize', fontWeight: 'bold' }}>
                                            Product 2
                                            <GitHubIcon sx={{ fontSize: "16px", color: '#ACACAC', ml: 1 }} />
                                            <LanguageIcon sx={{ fontSize: "16px", color: '#ACACAC', ml: 1 }} />
                                        </Typography>
                                        <CloseIcon sx={{ fontSize: '16px', color: '#ACACAC', justifyContent: 'right', fontWeight: 'bold', marginLeft: '33%' }} />
                                    </Button>
                                </Item>
                            </Stack>
                        </Grid>

                        <Grid direction="row" container className={styles.topgrid} sx={{ background: '#fff', mt: 2 }}>

                            <Item elevation={0} sx={{
                                width: '100%',
                                // backgroundColor: "yellow", 
                                m: 0,
                                p: 2
                            }}>
                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    ml: 2
                                    // backgroundColor: "green" 
                                }}> {/*First Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                                {/* First Column - First Row */}
                                                <h2 style={{ color: '#000', fontSize: "16px", textTransform: 'capitalize' }}> Description </h2>
                                                <Divider variant='middle' sx={{ ml: 0, width: '30%' }} />
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                <h2 style={{ color: '#000', fontSize: "16px", textTransform: 'capitalize' }}> Description </h2>
                                                <Divider variant='middle' sx={{ ml: 0, width: '30%' }} />
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                                <Divider orientation="vertical" flexItem sx={{ mr: 4, ml: 2, borderRightWidth: 2, color: theme.palette.icon_highlightgray }} />
                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    // backgroundColor: "green" 
                                }}> {/*Second Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                                {/* Second Column - First Row */}
                                                <h2 style={{ color: '#000', fontSize: "16px", textTransform: 'capitalize' }}> Description </h2>
                                                <Divider variant='middle' sx={{ ml: 0, width: '30%' }} />
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                <h2 style={{ color: '#000', fontSize: "16px", textTransform: 'capitalize' }}> Description </h2>
                                                <Divider variant='middle' sx={{ ml: 0, width: '30%' }} />
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                                <Divider orientation="vertical" flexItem sx={{ mr: 4, ml: 2, borderRightWidth: 2, color: theme.palette.icon_highlightgray }} />
                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    // backgroundColor: "green" 
                                }}> {/*Third Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                                {/* Third Column - First Row */}
                                                <h2 style={{ color: '#000', fontSize: "16px", textTransform: 'capitalize' }}> Description </h2>
                                                <Divider variant='middle' sx={{ ml: 0, width: '30%' }} />
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                <h2 style={{ color: '#000', fontSize: "16px", textTransform: 'capitalize' }}> Description </h2>
                                                <Divider variant='middle' sx={{ ml: 0, width: '30%' }} />
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                            </Item>
                        </Grid>

                        <Grid direction="row" container className={styles.topgrid} sx={{ background: '#fff', mt: 2 }}>

                            <Item elevation={0} sx={{
                                width: '100%',
                                // backgroundColor: "yellow", 
                                m: 0,
                                p: 2
                            }}>
                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    // backgroundColor: "green" 
                                }}> {/*First Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                                {/* First Column - First Row */}
                                                <h2 style={{ color: '#000', fontSize: "16px", textTransform: 'capitalize' }}> Metric </h2>
                                                <Divider variant='middle' sx={{ ml: 0, width: '15%' }} />
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                                <Divider orientation="vertical" flexItem sx={{ mr: 2, ml: 1, borderRightWidth: 2, color: theme.palette.icon_highlightgray }} />
                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    // backgroundColor: "green" 
                                }}> {/*Second Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, mt: 6, textAlign: "left", width: '100%' }}>
                                                {/* Second Column - First Row */}
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                                <Divider orientation="vertical" flexItem sx={{ mr: 2, ml: 2, borderRightWidth: 2, color: theme.palette.icon_highlightgray }} />
                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    // backgroundColor: "green" 
                                }}> {/*Third Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, mt: 6, textAlign: "left", width: '100%' }}>
                                                {/* Third Column - First Row */}
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                            </Item>
                        </Grid>

                        <Grid direction="row" container className={styles.topgrid} sx={{ background: '#fff', mt: 2 }}>

                            <Item elevation={0} sx={{
                                width: '100%',
                                // backgroundColor: "yellow", 
                                m: 0,
                                p: 2
                            }}>
                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    // backgroundColor: "green" 
                                }}> {/*First Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                                {/* First Column - First Row */}
                                                <h2 style={{ color: '#000', fontSize: "16px", textTransform: 'capitalize' }}> Metric </h2>
                                                <Divider variant='middle' sx={{ ml: 0, width: '15%' }} />
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                                <Divider orientation="vertical" flexItem sx={{ mr: 2, ml: 1, borderRightWidth: 2, color: theme.palette.icon_highlightgray }} />

                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    // backgroundColor: "green" 
                                }}> {/*Second Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, mt: 6, textAlign: "left", width: '100%' }}>
                                                {/* Second Column - First Row */}
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                                <Divider orientation="vertical" flexItem sx={{ mr: 2, ml: 2, borderRightWidth: 2, color: theme.palette.icon_highlightgray }} />

                                <Paper elevation={0} spacing={4} sx={{
                                    width: '33%',
                                    // backgroundColor: "green" 
                                }}> {/*Third Column*/}
                                    <Stack>
                                        <Item elevation={0}>
                                            <Paper elevation={0} className={styles.paper} sx={{ p: 1, mt: 6, textAlign: "left", width: '100%' }}>
                                                {/* Third Column - First Row */}
                                                <p sx={{ fontSize: '14px' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                                            </Paper>
                                        </Item>
                                    </Stack>
                                </Paper>
                            </Item>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}


export default ComparisonResult;