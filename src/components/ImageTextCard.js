import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgTextCard(props) {
  return (
    <Card sx={{ maxWidth: 280, borderColor: "#f5f5f5", borderRadius: 8 }}>
      <CardMedia
        component="img"
        alt="pic"
        height={props.height}
        width={props.width}
        image={props.img}
      />
      <CardContent>
        <Typography
          variant="body1"
          color="#008080"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {props.text}
        </Typography>
        {/* for title of a person (team members) */}
        <Typography
          variant="p"
          color="#808080"
          sx={{
            mt: 1,
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            display: "flex",
          }}
        >
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
