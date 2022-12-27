import React, { useState } from "react";
import { Button, Grid, Paper, Box, Stack, TextField, Autocomplete, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Image } from "antd";
import styles from '../../pages/Dashboard/Dashboard.module.css';
import theme from '../../styles/atlas_theme';
import { styled } from '@mui/material/styles';
import SelectorButton from "../../common/SelectorButton"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RectangleIcon from '@mui/icons-material/Rectangle';
import Item from '../../components/Dashboard/GridItem';

const CategoryCard = () => {
    const [show, setShow] = useState(false);

    return (
        <> {/* Category Element - Repeated */}
            <div style={{ height: 'auto', width: '97%', backgroundColor: "#fff", border: "1px solid #d9d9d9", borderRadius: "8px", margin: "12px" }}>

                <Item elevation={0} sx={{ textAlign: 'left', backgroundColor: "#fff", m: 1, p: 0, border: '0' }}>

                    <Paper elevation={0} className={styles.paper} sx={{ m: 2 }}>
                        <Image
                            className={styles.imageVectorLogo}
                            height={80}
                            src="https://avatars.githubusercontent.com/u/1231870?s=200&v=4"
                            style={{ padding: '8px' }}
                        />

                    </Paper>
                    <Paper elevation={0} className={styles.paper} sx={{ m: 1 }}>

                        <h3 style={{ fontSize: "20" }}>CircleCI <GitHubIcon style={{ fontSize: "20px", color: '#ACACAC' }} /> <LanguageIcon style={{ fontSize: "20px", color: '#ACACAC' }} /> </h3>
                        <p style={{ fontSize: "14px" }}>Lorem Ipsum is simply dummy text </p>
                        <p style={{ color: "#1F3180" }}>Categories &#60; SubCategories</p>
                    </Paper>
                    <Paper elevation={0} className={styles.paper} sx={{ justifyContent: 'right', m: 1, mb: 12, ml: 30 }}>
                        <SelectorButton />
                    </Paper>
                    <Paper elevation={0} className={styles.paper} sx={{ justifyContent: 'right', m: 1 }}>
                        <p style={{ fontSize: "14px", color: "#505050" }}> <StarIcon style={{ fontSize: "14px" }} /> 669 stars</p>
                        <p style={{ fontSize: "14px", color: "#505050" }}> <CallSplitIcon style={{ fontSize: "14px" }} /> 1289 forks</p>
                        <p style={{ fontSize: "14px", color: "#505050" }}> <DescriptionIcon style={{ fontSize: "14px" }} /> License </p>
                    </Paper>
                </Item>

                {/* Toggle Section */}

                {show &&
                    <div style={{ height: 'auto', width: '100%', backgroundColor: "#fff" }}>
                        <Item elevation={0} sx={{ width: '100%', textAlign: "left", backgroundColor: "#fff", m: 0, p: 3 }}>
                            <Paper elevation={0} sx={{ width: '100%' }}>
                                <h3 style={{ fontSize: '14px', color: theme.palette.texthighlightgray_subtext }}>
                                    Description
                                </h3>
                                <Divider sx={{ borderBottomWidth: 3, width: '15%' }} textAlign="left" />
                                <p style={{ marginTop: '10px', color: theme.palette.texthighlightgray_subtext }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </Paper>
                        </Item>
                        <Item elevation={0} sx={{ 
                            width: '100%', 
                            // backgroundColor: "yellow", 
                            m: 0, 
                            p: 2 }}>
                            <Paper elevation={0} spacing={4} sx={{ 
                                width: '50%', 
                                // backgroundColor: "green" 
                                }}>
                                <Stack>
                                    <Item elevation={0}>
                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                            <h3 style={{ fontSize: '14px' }}>Founding Team</h3>
                                            <Divider sx={{ borderBottomWidth: 3, width: '30%' }} textAlign="left" />
                                            <p style={{ marginTop: '10px', color: theme.palette.texthighlightgray_subtext }}>
                                                <GroupIcon sx={{ fontSize: '14px', color: theme.palette.texthighlightgray }} /> Name 1, Name 2, Name 3, Name 4, Name 5
                                            </p>
                                        </Paper>
                                    </Item>
                                    <Item elevation={0}>
                                        <div style={{ height: 'auto', width: '100%', backgroundColor: "#fff" }}>
                                            <Item elevation={0} sx={{ justifyContent: "left", backgroundColor: "#fff", m: 1, ml: 1, p: 0, border: '0' }}>
                                                <Paper elevation={0} className={styles.paper}>
                                                    <h3 style={{ fontSize: '14px' }}>Total Members</h3>
                                                    <Divider sx={{ borderBottomWidth: 3, mb: 2, width: '100%' }} textAlign="left" />
                                                    <h4 style={{ textAlign: "left", fontSize: '14px', color: theme.palette.texthighlight_alertblue }}>3354</h4>
                                                </Paper>
                                                <Paper elevation={0} className={styles.paper} sx={{ ml: 16 }}>
                                                    <h3 style={{ fontSize: '14px' }}>Active Members</h3>
                                                    <Divider sx={{ borderBottomWidth: 3, mb: 2, width: '100%' }} textAlign="left" />
                                                    <h4 style={{ textAlign: "left", fontSize: '14px', color: theme.palette.texthighlight_alertblue }}>1987</h4>
                                                </Paper>
                                            </Item>
                                        </div>
                                    </Item>
                                    <Item elevation={0}>
                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                            <h3 style={{ fontSize: '14px' }}>Hashtags</h3>
                                            <Divider sx={{ borderBottomWidth: 3, mb: 2, width: '20%' }} textAlign="left" />
                                            <h4 style={{ textAlign: "left", fontSize: '14px', color: theme.palette.texthighlightgray }}>Tag 1, Tag 2, Tag 3, Tag 4</h4>
                                        </Paper>
                                    </Item>
                                </Stack>
                            </Paper>


                            <Paper elevation={0} spacing={4} sx={{ 
                                mb: 5, 
                                width: '50%', 
                                // backgroundColor: "blue" 
                                }}>
                                <Stack elevation={0}>
                                    <Item elevation={0}>
                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                            <h3 style={{ fontSize: '14px' }}>Founded in</h3>
                                            <Divider sx={{ borderBottomWidth: 3, width: '20%' }} textAlign="left" />
                                            <p style={{ marginTop: '10px', color: theme.palette.texthighlightgray_subtext }}>
                                                <CalendarMonthIcon sx={{ fontSize: '14px', color: theme.palette.texthighlightgray }} /> 2014
                                            </p>
                                        </Paper>
                                    </Item>
                                    <Item elevation={0}>
                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                            <h3 style={{ fontSize: '14px' }}>Top Technologies :</h3>
                                            <Divider sx={{ borderBottomWidth: 3, width: '30%' }} textAlign="left" />
                                            <p style={{ marginTop: '10px', color: theme.palette.texthighlightgray_subtext }}>
                                                Progress Bar
                                            </p>
                                        </Paper>
                                    </Item>
                                    <Item elevation={0}>
                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, textAlign: "left", width: '100%' }}>
                                            Individual Progress
                                        </Paper>
                                    </Item>
                                </Stack>
                            </Paper>
                        </Item>
                    </div>

                }


                <Divider variant='middle' sx={{ borderBottomWidth: 3 }} />

                <div style={{ height: 'auto', width: '100%', backgroundColor: "#fff" }}>
                    <Item elevation={0} sx={{ justifyContent: "left", backgroundColor: "#fff", m: 1, ml: 3, p: 0, border: '0' }}>

                        <Paper elevation={0} className={styles.paper} sx={{ fontSize: '13px' }}>
                            Propietary Alternatives :
                        </Paper>
                        <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, mt: 1.75 }}>
                            <p style={{ ml: 6, fontSize: '12px' }}> <RectangleIcon style={{ fontSize: '18px', color: theme.palette.icon_highlightgray }} /> Company 1 </p>
                        </Paper>
                        <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, mt: 1.75 }}>
                            <p style={{ ml: 6, fontSize: '12px' }}> <RectangleIcon style={{ fontSize: '18px', color: theme.palette.icon_highlightgray }} /> Company 2 </p>
                        </Paper>
                        <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 0, mt: 1.75 }}>
                            <p style={{ ml: 6, fontSize: '12px' }}> <RectangleIcon style={{ fontSize: '18px', color: theme.palette.icon_highlightgray }} /> Company 3 </p>
                        </Paper>
                        <Paper elevation={0} className={styles.paper} sx={{ ml: 6 }}>
                            <Button style={{ fontSize: '12px' }} onClick={() => setShow(!show)}>
                                <KeyboardArrowUpIcon />
                                {show === true ? 'Less Details' : 'More Details'}
                            </Button>
                        </Paper>
                        <Paper elevation={0} className={styles.paper} sx={{ ml: 0.75 }}>
                            <Button sx={{
                                background: '#000003',
                                color: '#fff',
                                fontSize: '11px',
                                '&:hover': {
                                    border: '2px solid #000003',
                                    color: '#000'
                                }
                            }}>
                                Save
                            </Button>
                        </Paper>
                        <Paper elevation={0} className={styles.paper} sx={{ ml: 1.25}}>
                            <Button sx={{border: '2px solid #000003', fontSize: '11px'}}> 
                            <CropSquareIcon style={{ fontSize: '20px', color: '#000003' }} /> 
                            Compare 
                            </Button>
                        </Paper>
                    </Item>
                </div>

            </div>
        </>
    );
}


export default CategoryCard;