import React, { useState } from 'react';
import { List, ListItem, Component, TextField } from "@mui/material";
import Thumbnail from "react-webpage-thumbnail";

const ProductThumbnail = (producturl) => {
    return (
        <>
            <Thumbnail
                url={producturl}
                width={50}
                height={50}
                iframeHeight={1920}
                iframeWidth={1080}
                sx={{
                    border: '2px solid #313131',
                    borderRadius: '5px'
                }}
            />
            <p style={{textAlign: 'center', fontSize: '10px'}}> Product 1 </p>
        </>
    );

}

export default ProductThumbnail;