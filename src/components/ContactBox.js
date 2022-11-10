import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function ContactBox(props) {
  return (
    <Stack spacing={2}>
      {/* icon */}
      {props.icon}

      {/* heading phone */}
      <Typography
        color="#808080"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
          fontWeight: "bold",
        }}
      >
        {props.title}
      </Typography>
      {/* phone # */}
      <Typography
        variant="body2"
        color="#808080"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
          fontWeight: "bold",
        }}
      >
        {props.contact}
      </Typography>
    </Stack>
  );
}

export default ContactBox;
