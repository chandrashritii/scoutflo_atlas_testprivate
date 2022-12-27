import React, { useState } from "react";
import { Paper } from "@mui/material";
import theme from '../../styles/atlas_theme';
import { styled } from '@mui/material/styles';

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

export default Item;