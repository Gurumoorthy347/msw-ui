import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { saveWebSite } from '../ApiServices';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function AddWebSite(){

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const handleSubmit = (e) => {
        let payload = {
          webSiteName : name,
          webSiteUrl : url,
          isActive : isActive
        };
      
        saveWebSite(payload).then( resp => {
          handleReset();
          console.log(resp);
          if(resp && resp.status && resp.status === 200){
            setSuccessMsg(true);
            console.log( resp.data);
          }else{
            setSuccessMsg(false);
          }
        }).catch( err => {
          setSuccessMsg(false);
          console.log( err );
        });
      }
      
      function onNameChange(e){
        setName(e.target.value);
      }
      
      function onUrlChange(e){
        setUrl(e.target.value);
      }

      function onIsActiveChange(e){
        console.log(e.target.checked);
        setIsActive(e.target.checked);
      }

      function handleErrorClose(){
        setErrorMsg(false);
      }

      function handleSuccessClose(){
        setSuccessMsg(false);
      }

      function handleClose(){
        handleErrorClose();
        handleSuccessClose();
      }

      const handleReset = () => {
        setIsActive(false);
        setName('');
        setUrl('');
      }

      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    return(
    <div className="App">
      <header className="App-header">
      <React.Fragment>
      <CssBaseline />
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Monitoring System for Website
            </Typography>
          </Toolbar>
        </AppBar>
      <Toolbar />
      <Container>
      {/* <Alert severity="success" hidden={ successMsg } >Website added successfully.</Alert>
      <Alert severity="error"  hidden={ errorMsg }>Expection occured while storing website.</Alert> */}
      <Snackbar
        open={successMsg}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
        message="Website added successfully."
        action={action}
      />
      <Snackbar
        open={errorMsg}
        autoHideDuration={6000}
        onClose={handleErrorClose}
        message="Expection occured while storing website."
        action={action}
      />
        <Box sx={{ my: 2 }} className="box">
          <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={3} sm={4} md={4} key={0}>
          <Typography variant="h6" component="div">
              Add a Website to monitoring
            </Typography>
            </Grid>
            <Grid item xs={3} sm={4} md={4} key={1}>

            </Grid>
            <Grid item xs={3} sm={4} md={4} key={2}>

            </Grid>
          <Grid item xs={3} sm={4} md={4} key={3}>
            <TextField
              label="Website Name"
              id="name"
              size="small"
              required
              onChange={onNameChange}
              value={ name}
              />
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={4}>
          <TextField
              label="Website Url"
              id="url"
              size="small"
              onChange={onUrlChange}
              value={url}
              required
              />
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={5}>
            <FormControlLabel
            id='isActive'
            onChange={ onIsActiveChange} 
            value={isActive} 
            control={<Switch color="primary"/>}
            label="Website is active"
            labelPlacement="start"
          />
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={6}>

          </Grid>
          <Grid item xs={2} sm={4} md={4} key={7}></Grid>
          <Grid item xs={2} sm={4} md={4} key={8}>
          <Stack direction="row" spacing={2} style={ { display: 'contents'}} >
          <Button variant="contained" color="success" onClick={ handleSubmit}>
            Save
          </Button>
          <Button variant="contained" color="primary" onClick={handleReset}>
            Reset
          </Button>
          </Stack>
          </Grid>
        </Grid>
        </Box>
      </Container>
      </React.Fragment>
      </header>
      </div>
);
}

export default AddWebSite;