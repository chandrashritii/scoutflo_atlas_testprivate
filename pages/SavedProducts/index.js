import React, { useState } from "react";
import { Button, Box, Grid, Paper, Stack, Divider, List, ListItem, ListItemText, Dialog, DialogContent, FormControl } from "@mui/material";
import styles from './SavedProducts.module.css';
import commonstyles from '../Dashboard/Dashboard.module.css'
import Navbar from '../../common/Navbar';
import Item from '../../common/GridItem';
import theme from '../../styles/atlas_theme';
import { Image } from "antd";
import RectangleIcon from '@mui/icons-material/Rectangle';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ProductThumbnail from '../../common/ProductThumbnail';

function SavedProducts() {

    return (
        <>
            <Navbar />
            <div className={commonstyles.container}>
                <div className={commonstyles.cardMain}>

                    {/* Side Menu starts */}

                    <Grid direction="row" container className={styles.topgrid}>
                        <Grid item elevation={0} xs={3} md={3} sx={{ height: 'auto', p: 1 }}>
                            <Item elevation={0} sx={{ border: "1px solid #d9d9d9", borderRadius: "8px" }} >
                                <Paper elevation={0} className={styles.paper} md={1} sx={{ width: "90%", height: "auto", alignItems: 'center', }}>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                    }}>
                                        <RectangleIcon sx={{ mt: 3, fontSize: '30px', color: theme.palette.icon_highlightgray }} /> <h2 style={{ paddingLeft: '15px', fontSize: '24px' }}> Hi, Username </h2>
                                    </div>
                                    <Divider variant='middle' />
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        margin: '6px 0px 0px 16px'
                                    }}>
                                        <h2 style={{ fontFamily: 'DM Sans', fontSize: '14px' }}> My Products </h2>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'left',
                                        paddingLeft: '38px'
                                    }}>
                                        <List component="nav" sx={{ mt: 0 }} aria-label="product-list" disablePadding>
                                            <ListItem disablePadding>
                                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="All Products" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Product 1" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Product 2" />
                                            </ListItem>
                                        </List>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        margin: '6px 0px 0px 16px'
                                    }}>
                                        <h2 style={{ fontFamily: 'DM Sans', fontSize: '14px' }}> All Comparisons </h2>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'left',
                                        paddingLeft: '38px'
                                    }}>
                                        <List component="nav" sx={{ mt: 0 }} aria-label="product-list" disablePadding>
                                            <ListItem disablePadding>
                                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="All Comparisons" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Comparison 1" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Comparison 2" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="Comparison 3" />
                                            </ListItem>
                                        </List>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        margin: '6px 0px 0px 16px'
                                    }}>
                                        <h2 style={{ fontFamily: 'DM Sans', fontSize: '14px' }}> Profile </h2>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'left',
                                        paddingLeft: '38px'
                                    }}>
                                        <List component="nav" sx={{ mt: 0 }} aria-label="product-list" disablePadding>
                                            <ListItem disablePadding>
                                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary="General" />
                                            </ListItem>
                                        </List>
                                    </div>

                                    <Divider variant='middle' sx={{ mt: 2 }} />

                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'left',
                                        padding: '0px 0px 10px 15px',
                                    }}>
                                        <h5 style={{ fontSize: '14px', color: "#980000" }}>Logout</h5>
                                    </div>

                                </Paper>
                            </Item>
                        </Grid>

                        {/* Product Cards Section*/}

                        <Grid item md={9} sx={{ p: 1, m: 0, height: 'auto' }}>
                            <div style={{ height: 'auto', paddingBottom: "10px", backgroundColor: "#fff", border: "1px solid #d9d9d9", borderRadius: "8px" }}>
                                <Item elevation={0} sx={{ backgroundColor: "#fff", ml: 4, p: 0, fontSize: '26px', justifyContent: 'left' }} >
                                    <h4 style={{ color: "#272727", fontSize: '26px', marginBottom: '15px' }}> My Products </h4>
                                </Item>
                                <Divider variant='middle' sx={{ borderBottomWidth: 5, background: '#272727', width: '20%', ml: 4 }} />

                                <Item elevation={0} sx={{ width: '100%', m: 0, p: 2, backgroundColor: "#fff", textAlign: 'left' }} >

                                    <Stack>
                                        <Item elevation={0} sx={{ textAlign: "left", justifyContent: 'left', ml: 1 }}>
                                            <Paper direction="column" elevation={4} sx={{ m: 0, p: 1, mb: 0, pb: 0, border: '1px solid #E8E8E8', borderRadius: '3px'}}>
                                                <h4 style={{ marginLeft: '25px' }}> All Products </h4>
                                                <Paper direction="row" component={Stack} elevation={0} className={styles.paper} sx={{ m: 1, p: 1, mt: 0, mb: 0, width: '100%', height: '50px'}}>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                </Paper>
                                                <Divider variant='middle' sx={{ m: 0, p: 0, mt: 4, mb: 0}} />
                                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <FormControl sx={{ minWidth: '90%' }}>
                                                        <List mt={0} pt={0} component={Stack} direction="row" sx={{ backgroundColor: "#fff", m: 0, p: 0 }}>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', ml: 2, p: 0 }} >
                                                                <h4 style={{ fontSize: '12px' }}> 67 Products </h4>
                                                            </ListItem>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-end', ml: 7 }} >
                                                                <Button sx={{
                                                                    background: '#000',
                                                                    color: '#fff',
                                                                    fontSize: '10px',
                                                                    '&:hover': {
                                                                        border: '2px solid #000003',
                                                                        color: '#000'
                                                                    }
                                                                }}>
                                                                    View
                                                                </Button>
                                                            </ListItem>
                                                        </List>
                                                    </FormControl>
                                                </Box>
                                            </Paper>


                                            <Paper direction="column" elevation={4} sx={{ m: 1, p: 1, mb: 0, pb: 0, border: '1px solid #E8E8E8', borderRadius: '3px'}}>
                                                <h4 style={{ marginLeft: '25px' }}> All Products </h4>
                                                <Paper direction="row" component={Stack} elevation={0} className={styles.paper} sx={{ m: 1, p: 1, mt: 0, mb: 0, width: '100%', height: '50px'}}>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                </Paper>
                                                <Divider variant='middle' sx={{ m: 0, p: 0, mt: 4, mb: 0}} />
                                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <FormControl sx={{ minWidth: '90%' }}>
                                                        <List mt={0} pt={0} component={Stack} direction="row" sx={{ backgroundColor: "#fff", m: 0, p: 0 }}>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', ml: 2, p: 0 }} >
                                                                <h4 style={{ fontSize: '12px' }}> 67 Products </h4>
                                                            </ListItem>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-end', ml: 7 }} >
                                                                <Button sx={{
                                                                    background: '#000',
                                                                    color: '#fff',
                                                                    fontSize: '10px',
                                                                    '&:hover': {
                                                                        border: '2px solid #000003',
                                                                        color: '#000'
                                                                    }
                                                                }}>
                                                                    View
                                                                </Button>
                                                            </ListItem>
                                                        </List>
                                                    </FormControl>
                                                </Box>
                                            </Paper>

                                            <Paper direction="column" elevation={4} sx={{ m: 1, p: 1, mb: 0, pb: 0, border: '1px solid #E8E8E8', borderRadius: '3px'}}>
                                                <h4 style={{ marginLeft: '25px' }}> All Products </h4>
                                                <Paper direction="row" component={Stack} elevation={0} className={styles.paper} sx={{ m: 1, p: 1, mt: 0, mb: 0, width: '100%', height: '50px'}}>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                </Paper>
                                                <Divider variant='middle' sx={{ m: 0, p: 0, mt: 4, mb: 0}} />
                                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <FormControl sx={{ minWidth: '90%' }}>
                                                        <List mt={0} pt={0} component={Stack} direction="row" sx={{ backgroundColor: "#fff", m: 0, p: 0 }}>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', ml: 2, p: 0 }} >
                                                                <h4 style={{ fontSize: '12px' }}> 67 Products </h4>
                                                            </ListItem>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-end', ml: 7 }} >
                                                                <Button sx={{
                                                                    background: '#000',
                                                                    color: '#fff',
                                                                    fontSize: '10px',
                                                                    '&:hover': {
                                                                        border: '2px solid #000003',
                                                                        color: '#000'
                                                                    }
                                                                }}>
                                                                    View
                                                                </Button>
                                                            </ListItem>
                                                        </List>
                                                    </FormControl>
                                                </Box>
                                            </Paper>

                                        </Item>


                                        <Item elevation={0} sx={{ textAlign: "left", justifyContent: 'left', mt: 2 }}>
                                        <Paper direction="column" elevation={4} sx={{ m: 1, p: 1, mb: 0, pb: 0, border: '1px solid #E8E8E8', borderRadius: '3px'}}>
                                                <h4 style={{ marginLeft: '25px' }}> All Products </h4>
                                                <Paper direction="row" component={Stack} elevation={0} className={styles.paper} sx={{ m: 1, p: 1, mt: 0, mb: 0, width: '100%', height: '50px'}}>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                </Paper>
                                                <Divider variant='middle' sx={{ m: 0, p: 0, mt: 4, mb: 0}} />
                                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <FormControl sx={{ minWidth: '90%' }}>
                                                        <List mt={0} pt={0} component={Stack} direction="row" sx={{ backgroundColor: "#fff", m: 0, p: 0 }}>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', ml: 2, p: 0 }} >
                                                                <h4 style={{ fontSize: '12px' }}> 67 Products </h4>
                                                            </ListItem>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-end', ml: 7 }} >
                                                                <Button sx={{
                                                                    background: '#000',
                                                                    color: '#fff',
                                                                    fontSize: '10px',
                                                                    '&:hover': {
                                                                        border: '2px solid #000003',
                                                                        color: '#000'
                                                                    }
                                                                }}>
                                                                    View
                                                                </Button>
                                                            </ListItem>
                                                        </List>
                                                    </FormControl>
                                                </Box>
                                            </Paper>

                                            <Paper direction="column" elevation={4} sx={{ m: 1, p: 1, mb: 0, pb: 0, border: '1px solid #E8E8E8', borderRadius: '3px'}}>
                                                <h4 style={{ marginLeft: '25px' }}> All Products </h4>
                                                <Paper direction="row" component={Stack} elevation={0} className={styles.paper} sx={{ m: 1, p: 1, mt: 0, mb: 0, width: '100%', height: '50px'}}>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                    <Stack m={1} mt={0}>
                                                        <ProductThumbnail />
                                                    </Stack>
                                                </Paper>
                                                <Divider variant='middle' sx={{ p: 0, mt: 4, mb: 0}} />
                                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <FormControl sx={{ minWidth: '90%' }}>
                                                        <List mt={0} pt={0} component={Stack} direction="row" sx={{ backgroundColor: "#fff", m: 0, p: 0 }}>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', ml: 2, p: 0 }} >
                                                                <h4 style={{ fontSize: '12px' }}> 67 Products </h4>
                                                            </ListItem>
                                                            <ListItem sx={{ display: 'flex', justifyContent: 'flex-end', ml: 7 }} >
                                                                <Button sx={{
                                                                    background: '#000',
                                                                    color: '#fff',
                                                                    fontSize: '10px',
                                                                    '&:hover': {
                                                                        border: '2px solid #000003',
                                                                        color: '#000'
                                                                    }
                                                                }}>
                                                                    View
                                                                </Button>
                                                            </ListItem>
                                                        </List>
                                                    </FormControl>
                                                </Box>
                                            </Paper>


                                        </Item>
                                    </Stack>
                                    {/* </Paper> */}

                                </Item>
                            </div>



                            {/* <div style={{ height: 'auto', paddingBottom: "10px", backgroundColor: "#fff", border: "1px solid #d9d9d9", borderRadius: "8px" }}>
                                // Categories 
                                <Item elevation={0} sx={{ backgroundColor: "#fff", ml: 4, p: 0, fontSize: '26px', justifyContent: 'left' }} >
                                    <h4 style={{ color: "#272727", fontSize: '26px', marginBottom: '15px' }}> My Products </h4>
                                </Item>
                                <Divider variant='middle' sx={{ borderBottomWidth: 5, background: '#272727', width: '20%', ml: 4 }} />

                                <Item elevation={0} sx={{ width: '100%', m: 0, p: 2, backgroundColor: "#fff", textAlign: 'left' }} >

                                    <Paper elevation={0} sx={{
                                        width: '100%',
                                        // backgroundColor: "green"
                                    }}>
                                        <Stack>
                                            <Item elevation={0} sx={{ textAlign: "left", justifyContent: 'left', ml: 1 }}>

                                                <Paper elevation={0} className={styles.paper} sx={{ p: 1, width: '30%' }}>
                                                    <h3 style={{ color: '#272727', fontSize: '16px', fontWeight: '300' }}>Profile Picture</h3>
                                                </Paper>
                                                <Paper elevation={0} className={styles.paper} sx={{ fontSize: '13px' }}>
                                                    <div className={styles.rectangle}>
                                                        // Add User Avatar 
                                                    </div>
                                                </Paper>
                                                <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 2, ml: 5, mt: 1.75 }}>
                                                  abc
                                                </Paper>
                                                <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 2, ml: 1, mt: 1.75 }}>
def
                                                </Paper>
                                            </Item>

                                            <Divider variant='middle' sx={{ m: 3, mt: 5 }} />

                                            // User Form 
                                            <div className="flex flex-col text-center justify-center h-screen">
                                                <Box
                                                    component="form"
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, p: 0, width: '55ch' },
                                                    }}
                                                >

                                                    <Item elevation={0} sx={{ width: '100%', m: 0, p: 1, backgroundColor: "#fff", textAlign: 'left' }} >
                                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, width: '30%' }}>
                                                            <h3 style={{ fontSize: '16px', fontWeight: '300' }}> First Name </h3>
                                                        </Paper>
                                                        <Paper elevation={0} className={styles.paper} >
                                                            <TextField id="outlined-basic" placeholder="What do we call you?" variant="outlined" />
                                                        </Paper>
                                                    </Item>

                                                    <Item elevation={0} sx={{ width: '100%', m: 0, p: 1, backgroundColor: "#fff", textAlign: 'left' }} >
                                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, width: '30%' }}>
                                                            <h3 style={{ fontSize: '16px', fontWeight: '300' }}> Last Name </h3>
                                                        </Paper>
                                                        <Paper elevation={0} className={styles.paper}>
                                                            <TextField id="outlined-basic" placeholder="What do we call you twice?" variant="outlined" />
                                                        </Paper>
                                                    </Item>

                                                    <Item elevation={0} sx={{ width: '100%', m: 0, p: 1, backgroundColor: "#fff", textAlign: 'left' }} >
                                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, width: '30%' }}>
                                                            <h3 style={{ fontSize: '16px', fontWeight: '300' }}> Role </h3>
                                                        </Paper>
                                                        <Paper elevation={0} className={styles.paper}>
                                                            <TextField id="outlined-basic" placeholder="What do we call you at work?" variant="outlined" />
                                                        </Paper>
                                                    </Item>

                                                    <Item elevation={0} sx={{ width: '100%', m: 0, p: 1, backgroundColor: "#fff", textAlign: 'left' }} >
                                                        <Paper elevation={0} className={styles.paper} sx={{ p: 1, mb: 3, width: '30%' }}>
                                                            <h3 style={{ fontSize: '16px', fontWeight: '300' }}> Email address</h3>
                                                        </Paper>
                                                        <Paper elevation={0} className={styles.paper}>
                                                            <TextField
                                                                required
                                                                placeholder="abc@gmail.com"
                                                                error={isUrlValid(validateUrl.url)}
                                                                helperText={isUrlValid(validateUrl.url) ? "Please enter a Valid Email ID" : ""}
                                                                onChange={event => setValid({ url: 'abc@gmail.com', tempUrl: event.target.value })}
                                                            />
                                                        </Paper>
                                                    </Item>

                                                    <Item elevation={0} sx={{ width: '100%', backgroundColor: "#fff", justifyContent: 'right', textAlign: 'right' }} >
                                                        <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 2, ml: 5, mt: 1.75 }}>
                                                            <Button size="large" onClick={handleSubmit} sx={{
                                                                border: '2px solid #000003',
                                                                fontSize: '14px',
                                                                fontFamily: 'Outfit',
                                                                padding: '8px 19px 8px 19px',
                                                                textTransform: 'none',
                                                                borderRadius: "8px",
                                                                color: '#000',
                                                            }}>
                                                                Cancel
                                                            </Button>
                                                        </Paper>
                                                        <Paper elevation={0} className={styles.paper} sx={{ m: 0.5, mb: 2, ml: 1, mt: 1.75 }}>
                                                            <Button onClick={handleSubmit} sx={{
                                                                background: '#F78500',
                                                                borderRadius: "8px",
                                                                width: '90%',
                                                                background: '#F78500',
                                                                color: '#fff',
                                                                fontSize: '14px',
                                                                fontFamily: 'Outfit',
                                                                textTransform: 'none',
                                                                borderRadius: "8px",
                                                                padding: '11px 20px 11px 20px',
                                                                '&:hover': {
                                                                  outline: '2px solid #000003',
                                                                  color: '#000'
                                                                }
                                                            }}>
                                                                Save
                                                               // <Dialog>Save</Dialog>  
                                                            </Button>
                                                        </Paper>
                                                    </Item>
                                                </Box>
                                            </div>
                                        </Stack>
                                    </Paper>
                                </Item>
                            </div> */}


                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default SavedProducts;