import React, { useState } from 'react';
import { Box, Item, List, ListItem, Stack, Button, Paper, Dialog, DialogContent, DialogTitle, FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import theme from '../../../styles/atlas_theme';
import SearchBar from '../../../common/SearchBar';
import styles from '../../../pages/Dashboard/Dashboard.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ProductList from './twoProductList';

export default function ComparisonModal() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

 
  return (
    <>
      <Button onClick={handleClickOpen} sx={{
        borderRadius: '8px',
        border: '1px solid #E8E8E8',
        color: theme.palette.text_transparenthighlight,
        padding: '20px 30px 20px 30px',
        width: '360px',
        justifyContent: 'left'
      }}>
        <AddBoxIcon size='1 rem' />
        <p style={{ marginBottom: '0px', marginLeft: '12px', color: theme.palette.text_transparenthighlight, fontSize: '1 rem' }}>    
         {window.sessionStorage.getItem("Company1 comparison")}
        </p>
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <List m={0} p={0} component={Stack} direction="row" sx={{ p: 0, m: 0, background: theme.palette.texthighlightblue }}>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-start' }} >
            <DialogTitle sx={{ color: theme.palette.white }}>
              <h2 style={{ fontSize: '18px', color: theme.palette.white }}> Add product to comparison </h2>
            </DialogTitle>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} >
            <Button onClick={handleClose}><CloseIcon sx={{ fontSize: '18px', color: theme.palette.white }} /></Button>
          </ListItem>
        </List>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ minWidth: '100%' }}>
              <List mt={0} pt={0} component={Stack} direction="row" sx={{ backgroundColor: "#fff", m: 0, mt: 1.5, p: 0 }}>
                <ListItem style={{ display: 'flex', justifyContent: 'flex-start' }} >
                  <h2 style={{ fontSize: '18px' }}> Search or select a product </h2>
                </ListItem>
                <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} >
                  <h2 style={{ fontSize: '18px' }}> Category </h2>
                </ListItem>
              </List>
              <div style={{ height: '52px', width: '95%', margin: '3px 0px 5px 13px' }}>
                <ProductList />
                {/* Render Product List here */}
              </div>
            </FormControl>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}