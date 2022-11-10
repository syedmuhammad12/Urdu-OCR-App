import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BoxContribution(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderColor="black"
      boxShadow="7"
      bgcolor="#008080"
      width="130px"
      height="130px"
    >
      <Typography
        variant="h5"
        color="#fff"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
}

export default BoxContribution;
