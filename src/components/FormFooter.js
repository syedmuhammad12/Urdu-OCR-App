import * as React from "react";
import {
  Button,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  TextareaAutosize,
  Box,
  Alert,
  Snackbar,
} from "@mui/material";

import axios from "axios";

let API_URL = "http://127.0.0.1:5000/";

export default function FormFooter() {
  const [open, setOpen] = React.useState(false);

  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");


  const handleSendMsg = () => {
    // error handling for entered inputs here
    // this function handles send msg
    // set open is a snackbar that gets opened when the msg is sent
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  async function  send_mail(){

    if (fname!=="" && fname!==" " && fname!==" " && lname!=="" && lname!==" " && email!=="" && email!==" " && message!=="" && message!==" "){
      let response = await axios.post(API_URL+"send_mail", { first_name: fname, last_name: lname, mail: email, mess: message});
      if (response.data === "sent"){
      handleSendMsg();
    }
      
      
  
  }



  }

  return (
    <Grid
      container
      justifyContent="center"
      columnSpacing={{ xs: 3 }}
      rowSpacing={{ xs: 3 }}
    >
      {/* email */}
      <Grid
        item
        container
        display="flex"
        justifyContent="center"
        xs={12}
        sm={12}
        md={10}
      >
        <TextField
          value={fname}
          onChange={(event) =>  {setFname(event.target.value)}}
          label="First name"
          id="filled-size-normal"
          defaultValue=""
          variant="outlined"
          fullWidth
        />
      </Grid>
      {/* last name */}
      <Grid
        item
        container
        display="flex"
        justifyContent="center"
        xs={12}
        sm={12}
        md={10}
      >
        <TextField
          value={lname}
          onChange={(event) =>  {setLname(event.target.value)}}
          label="Last name"
          id="filled-size-normal"
          defaultValue=""
          variant="outlined"
          fullWidth
        />
      </Grid>

      {/* Email, msg, button */}

      {/* email */}
      <Grid
        item
        container
        display="flex"
        justifyContent="center"
        xs={12}
        sm={12}
        md={10}
      >
        <TextField
          value={email}
          onChange={(event) =>  {setEmail(event.target.value)}}
          label="Email"
          id="filled-size-normal"
          defaultValue=""
          variant="outlined"
          fullWidth
        />
      </Grid>
      {/* message */}
      <Grid
        item
        container
        display="flex"
        justifyContent="center"
        xs={12}
        sm={12}
        md={10}
      >
        {/* msg */}
        <Box justifyContent="start" sx={{ p: 2, width: "100%" }}>
          <TextField
            value={message}
            onChange={(event) =>  {setMessage(event.target.value)}}
            id="outlined-multiline-static"
            label="Type your message here"
            multiline
            rows={5}
            variant="outlined"
            style={{
              width: "100%",

              maxWidth: "100%",
            }}
          />
        </Box>
      </Grid>
      {/* button */}
      <Grid
        item
        container
        display="flex"
        justifyContent="center"
        xs={12}
        sm={12}
        md={7}
      >
        <Button
          onClick={send_mail}
          variant="contained"
          sx={{
            backgroundColor: "#008080",
            borderRadius: 4,
            "&:hover": {
              backgroundColor: "#08b3e5",
            },
          }}
        >
          Send Message
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your message has been sent successfully!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
}
