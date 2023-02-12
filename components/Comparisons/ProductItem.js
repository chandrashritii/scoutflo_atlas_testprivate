/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, useState } from 'react';
import { FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@mui/material';

function ProductItem() {
   

    return (
        <>

            <Select value={selected} onChange={selectionChangeHandler} style={{}}>
                <MenuItem value={products.id}>{products.name}</MenuItem>
                <MenuItem value={products.id}>{products.name}</MenuItem>
                <MenuItem value={products.id}>{products.name}</MenuItem>
                <MenuItem value={products.id}>{products.name}</MenuItem>
                <MenuItem value={products.id}>{products.name}</MenuItem>
            </Select>



        </>
    )
    }
}


export default ProductItem;