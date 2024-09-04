import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

export default function CardWeather({
  icon,
  temp,
  country,
  name,
  region,
  time,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={icon}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {temp} grados.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {country}, {region}, {name} <br />
            {time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
