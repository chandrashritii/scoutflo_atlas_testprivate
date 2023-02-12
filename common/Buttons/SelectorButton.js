import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// To fix : Make button customizable - Read menu items from user defined array
// var menulist[]; 

const listlabel="In List";
//="In List";

function SelectorButton() {
    const [item, setItems] = React.useState('');
    const [select, setSelects] = React.useState('');
    

    const handleChange = (event) => {
        setItems(event.target.value);
    };


    const handleSelect = (e) => {
        setSelects(e.target.value);
    };

    

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 0, minWidth: 60, color: '#000' }}>
                <InputLabel sx={{color:"#000", fontSize:'12px', textDecoration: 'underline'}}>{listlabel}</InputLabel>
                {/* <h1>{select}</h1> */}
                <Select
                    value={select} 
                    // value={items}
                    placeholder= 'By Category'
                    onChange={handleSelect}
                    label="Items"
                >
                    
                  
                    <MenuItem value={10}>a</MenuItem>
                    <MenuItem value={20}>b</MenuItem>
                    <MenuItem value={30}>c</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
};

export default SelectorButton;