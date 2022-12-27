import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#090a40',
      darker: '#053e85',
    },
    secondary: {
      main: '#f78500',
    },
    buttonhover: {
        main: '#f78500', //Button hover - orange
    },
    texthighlightblue: '#1F3180',
    texthighlight_alertblue: '#334BD0',
    texthighlightred:'#980000',
    texthighlightgray: '#505050',
    texthighlightgray_subtext: '#313131',
    texthighlightbrown_subtext: '#272727',
    icon_highlightgray: '#E8E8E8',
  },
  typography: {
    button: {
      textTransform: 'none',
      fontFamily: 'DM Sans', //Add fonts
    }
  },
  divider: {
    // Theme Color, or use css color in quote
    background: '#505050',
    role:'presentation',
},
});

export default theme;
