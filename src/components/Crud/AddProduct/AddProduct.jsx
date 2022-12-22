import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

const AddProduct = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography>Add Product Panel</Typography>
        <TextField
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          name="img"
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <TextField
          name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          name="type"
          id="outlined-basic"
          label="Type"
          variant="outlined"
        />
        <Button variant="outlined">Add prod</Button>
      </Box>
    </div>
  );
};

export default AddProduct;
