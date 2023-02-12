import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const FilledDialog = styled(Dialog)(({ theme }) => ({

}));

function FilledDialogTitle(props) {

  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

DialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// function OpenandValidateForm() {
//   const [open, setOpen] = useState(false);
//   const [validateUrl, setValid] = useState({ url: 'abc@gmail.com', tempUrl: '' });

//   const isUrlValid = (url) => url.length < 2 || !url.includes('@') || !url.endsWith('com')


//   useEffect(() =>  {
//     setValid({ url: validateUrl.tempUrl, tempUrl: validateUrl.url });
//     setOpen(true);
//     // fetch("https://jsonplaceholder.typicode.com/todos/1").then((likes) => {
//     //   setIsLoading(false);
//     //   setLikes(likes);
//     // });
//   }, []);

//   const handleClose = () => {
//     setOpen(false);
//   };
// }

function ButtonFilledDialog({ children }) {

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);

  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const isMounted = useRef(true)

  // set isMounted to false when we unmount the component
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])


  const [open, setOpen] = useState(false);
  const [validateUrl, setValid] = useState({ url: 'abc@gmail.com', tempUrl: '', urlvalid: false });

  const isUrlValid = (url) => {
    if (url.length < 2 || !url.includes('@') || !url.endsWith('com')) {
      setValid({ urlvalid: true });
    }
  }

  const sendRequest = useCallback(async () => {
    <isUrlValid />

    setValid({ url: validateUrl.tempUrl, tempUrl: validateUrl.url });
    if (validateUrl.urlvalid == true) {
      if (isMounted.current) {
        setOpen(true);
      }
    } else setOpen(false);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={sendRequest} sx={{
        background: 'transparent',
        margin: 0,
        padding: 0,
        color: '#fff',
        fontSize: '14px',
        fontFamily: 'Outfit',
        textTransform: 'none',
        '&:hover': {
          outline: '2px solid #000003',
          color: '#000',
          padding: '11px 20px 11px 20px',
        }
      }}>
        {children}
      </Button>
      <FilledDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <FilledDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Congratulations!
        </FilledDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Your changes have been successfully saved
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </FilledDialog>
    </div>
  );
}

export default ButtonFilledDialog;