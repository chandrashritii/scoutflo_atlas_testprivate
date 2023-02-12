import React, { useState } from "react";
import { Button, Select, Grid, Paper, Stack, FormControl, Divider, List, ListItem, ListItemText, OutlinedInput } from "@mui/material";
import styles from './Dashboard.module.css';
import theme from '../../styles/atlas_theme';
import NavBar from '../../common/Navbar';
import Landing from '../../components/Dashboard/Landing';
import CategoryCard from '../../components/Dashboard/CategoryCard';
import Item from '../../common/GridItem';
import SearchBar from '../../common/SearchBar';
import RectangleIcon from '@mui/icons-material/Rectangle';
import MenuIcon from '@mui/icons-material/Menu';
import FilterTab from '../../components/Dashboard/SingleChoiceFilter';
import DraftComparisonDrawer from "../../components/DraftComparisons/draftComparisonDrawer";

const Dashboard = () => {

    return (
        <>
            <NavBar />
            <Landing />
            <div className={styles.container}>
                <div className={styles.cardMain}>
                    {/* Filter Side Menu starts */}
                    <Grid direction="row" container>
                        <Grid elevation={0} item xs={3} md={3} sx={{ height: 'auto', p: 1, justifyContent: 'left' }}>
                            <Item elevation={0} className={styles.tabborder}>
                                <Paper elevation={0} md={1} className={styles.filtermenupaper} sx={{justifyContent: 'left'}}>
                                    <div sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        margin: '5%',
                                    }}>
                                        <h2 style={{ paddingLeft: '15px', fontSize: '24px' }}> <RectangleIcon style={{ fontSize: '30px', color: theme.palette.icon_highlightgray }} />  Hi, Username </h2>
                                    </div>
                                    <Divider variant='middle' sx={{ borderBottomWidth: 3 }} />
                                    <div className={styles.divcustom}>
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
                                    <div className={styles.divcustom} style={{
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
                                <Paper elevation={0} className={styles.paper} sx={{ width: "100%", height: "auto" }}>
                                    <FormControl style={{ minWidth: '100%' }}>
                                        <FilterTab />
                                        {/* {FilterTab('By Category')}
                                        {FilterTab('By Sub Category')}
                                        {FilterTab('By License')}
                                        {FilterTab('Technology Stack')}
                                        {FilterTab('No. of Stars')}
                                        {FilterTab('No. of forks')} */}
                                    </FormControl>
                                </Paper>
                            </Item>
                        </Grid>
                        {/* Filter Side Menu ends */}


                        {/* Dashboard begins */}
                        <Grid item md={9} sx={{ p: 1, m: 0, height: 'auto' }}>

                            {/* Search Bar */}
                            <Item elevation={0} sx={{ height: 'auto', border: "1px solid #d9d9d9", borderRadius: "8px" }}>
                                <div style={{ height: '52px', width: '100%', margin: '3px 0px 5px 13px' }}>
                                    <SearchBar />
                                </div>
                                <Button variant="outlined" sx={{ width: " 25%", p: 1.5, m: 1, mb: 1.75 }} startIcon={<MenuIcon />}>
                                    Sort By : Name
                                </Button>
                            </Item>

                            <div style={{ height: 'auto', width: '100%', paddingBottom: "10px", backgroundColor: "#fff", border: "1px solid #d9d9d9", borderRadius: "8px", marginTop: '15px' }}>
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
                <DraftComparisonDrawer />
            </div >
        </>
    )

}

export default Dashboard;