import React from "react";
import { Box } from "@mui/material";
import styles from '../../pages/Dashboard/Dashboard.module.css';

function Landing() {
    return (
        <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: 400, backgroundColor: 'primary.main', margin: 0 }}
        >
            <p className={styles.centeralign}>
                <h1 style={{color: "#fff"}}> lorem ipsum lroaug. clwiu3ev voiqulwev  <br /> lunwleck bvro3inv </h1>
                lorem ipsum lroaug. clwiu3ev voiqulwev lunwleck bvro3inv lorem ipsum lroaug. clwiu3ev <br /> voiqulwev lunwleck bvro3invlorem ipsum lroaug. clwiu3ev voiqulwev lunwleck
            </p>
        </Box>
    )
}


export default Landing;