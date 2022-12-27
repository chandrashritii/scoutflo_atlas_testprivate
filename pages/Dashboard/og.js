import React from "react";
import { Button, Grid, Paper, Box, Stack, TextField, Autocomplete, Divider, List, ListItem, ListItemText } from "@mui/material";
import styles from './Dashboard.module.css';
// import { WithContext as ReactTags } from 'react-tag-input';
import theme from '../../styles/atlas_theme';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NavBar from '../../components/Dashboard/Navbar';
import Landing from '../../components/Dashboard/Landing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: '0px',
    padding: '0px',
    color: theme.palette.text.secondary,
}));

const manualOptions = [
    { title: 'abc' },
    { title: 'def' },
    { title: 'dhe' },
]; // Search Bar -  Will be replaced by api index


// Profile Grid
function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={1} sx={{ p: 0, m: 0 }}>
                <Item sx={{ p: 0, borderRadius: '15px 15px 0px 0px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <AccountCircleIcon style={{ fontSize: '34px' }} /> <h2 style={{ paddingLeft: '15px' }}> Hi, Username </h2>
                    </div>
                    <Divider />
                </Item>
            </Grid>

            <Grid item xs={1} sx={{ p: 0 }}>
                <Item sx={{ p: 0, borderRadius: '0px', justifyContent: 'left' }}>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem>
                            <ListItemText primary="My Products" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="My Comparisons" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <Divider />
                    </List>
                </Item>
            </Grid>
            <Grid item xs={1} sx={{ p: 0 }}>
                <Item sx={{ p: '0 0 0 20px', borderRadius: '0px 0px 15px 15px', justifyContent: 'left' }}>
                    <h4>Logout</h4>
                </Item>
            </Grid>
        </React.Fragment>
    );
}


const style = {
    height: '100%',
    bgcolor: 'background.paper',
};

const Dashboard = () => {

    return (
        <>
        <NavBar />
        <Landing />
        <div className={styles.container}>
            <div className={styles.cardMain}>
                {/* Filter Side Menu starts */}
                {/* <Box sx={{ flexGrow: 1 }}> */}
                    <Grid container spacing={5} className={styles.topgrid}>
                        <Grid item direction="column" xs={2} md={2.75} sx={{ backgroundColor: "black", height: 300, p: 0 }}>
                            <FormRow />

                            <Item sx={{ mt: 2 }}>
                                <h4 style={{ marginRight: '10%' }}>Filters</h4>

                                <h4 style={{ marginLeft: '15%' }}>Clear All</h4>
                            </Item>
                        </Grid>


                        {/* Filter Side Menu ends */}

                        {/* Dashboard begins */}

                        <Grid item space={5} direction="row" xs={1} md={8} sx={{ p: 0, m: 0 }}> {/* Search Bar */}
                            <Item direction="row">
                                <Stack spacing={2} sx={{ width: 540, margin: '15px 25px 15px 3px' }}>
                                    <Autocomplete
                                        freeSolo
                                        id="search-bar"
                                        disableClearable
                                        options={manualOptions.map((option) => option.title)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Search input"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                </Stack>
                                <Button variant="outlined" sx={{ p: 1.75 }} startIcon={<MenuIcon />}>
                                    Sort By : Name
                                </Button>
                            </Item>
                            <Item sx={{ mt: 2 }}>
                                ejfioj
                            </Item>

                            {/* Dashboard ends */}


                        </Grid>
                    </Grid>


                {/* </Box> */}
            </div>
        </div>
        </>
    )
}

export default Dashboard;