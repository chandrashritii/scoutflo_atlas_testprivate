import React, { useState } from "react";
import { Button, Grid, Paper, Stack, Divider, List, ListItem, ListItemText } from "@mui/material";
import styles from './Dashboard.module.css';
// import { WithContext as ReactTags } from 'react-tag-input';
import theme from '../../styles/atlas_theme';
import MenuIcon from '@mui/icons-material/Menu';
import NavBar from '../../components/Dashboard/Navbar';
import Landing from '../../components/Dashboard/Landing';
import CategoryCard from '../../components/Dashboard/CategoryCard';
import Item from '../../components/Dashboard/GridItem';
import SearchBar from '../../common/SearchBar';
import RectangleIcon from '@mui/icons-material/Rectangle';

import FilterTab from '../../components/Dashboard/Filter';

const Dashboard = () => {
    
    return (
        <>
            <NavBar />
            <Landing />
            <div className={styles.container}>
                <div className={styles.cardMain}>
                    {/* Filter Side Menu starts */}
                    <Grid direction="row" container className={styles.topgrid}>
                        <Grid elevation={0} item xs={3} md={3} sx={{height: 'auto', p: 1 }}>
                            <Item elevation={0} sx={{border: "1px solid #d9d9d9", borderRadius: "8px"}} >
                                <Paper elevation={0} className={styles.paper} md={1} sx={{ width: "90%", height: "auto", alignItems: 'center', }}>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        margin: '5%',
                                    }}>
                                        <RectangleIcon style={{ fontSize: '30px', color: theme.palette.icon_highlightgray }} /> <h2 style={{ paddingLeft: '15px', fontSize: '24px' }}> Hi, Username </h2>
                                    </div>
                                    <Divider variant='middle' sx={{ borderBottomWidth: 3 }} />
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'left',
                                    }}>
                                        <List component="nav" aria-label="index-menu" sx={{ fontSize: '14px' }} disablePadding>
                                            <ListItem>
                                                <ListItemText primary="My Products" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="My Comparisons" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Profile" />
                                            </ListItem>
                                        </List>
                                    </div>
                                    <Divider variant='middle' sx={{ borderBottomWidth: 3 }} />
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'left',
                                        padding: '10px 0px 10px 15px'
                                    }}>
                                        <h5 style={{ fontSize: '14px', color: "#980000" }}>Logout</h5>
                                    </div>
                                </Paper>
                            </Item>
                            <Item elevation={0} sx={{ 
                                // backgroundColor: "green", 
                                border: "1px solid #d9d9d9", 
                                borderRadius: "8px", 
                                mt: 2 
                                }}>
                                <Paper elevation={0} className={styles.paper} sx={{width: "100%", height: "auto" }}>
                                    {/* TO FIX - Filter Section */}

                                    <FilterTab />
                                </Paper>
                            </Item>
                        </Grid>
                        {/* Filter Side Menu ends */}


                        {/* Dashboard begins */}
                        <Grid item md={9} sx={{ p: 1, m: 0, height: 'auto'}}>

                            {/* Search Bar */}
                            <Item elevation={0} sx={{ height: 'auto',  border: "1px solid #d9d9d9", borderRadius: "8px" }}>
                                <div style={{ height: '52px', width: '100%', margin: '3px 0px 5px 13px' }}>
                                    <SearchBar />
                                </div>
                                <Button variant="outlined" sx={{ width: " 25%", p: 1.5, m: 1, mb: 1.75 }} startIcon={<MenuIcon />}>
                                    Sort By : Name
                                </Button>
                            </Item>

                            <div style={{ height: 'auto', width: '100%', paddingBottom: "10px", backgroundColor: "#fff",  border: "1px solid #d9d9d9", borderRadius: "8px", marginTop: '15px'}}>
                                {/* Categories */}
                                <Item elevation={0} sx={{ mt: 2, p: 3.5, justifyContent: 'left', border: '0' }}>
                                    <h4 style={{ color: "#1F3180" }}> Categories &#60; SubCategories </h4>
                                </Item>
                                <CategoryCard />
                                <CategoryCard />
                            </div>

                        </Grid>
                        {/* Dashboard ends */}
                    </Grid>
                </div >
            </div >
        </>
    )
}

export default Dashboard;