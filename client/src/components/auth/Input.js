import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";

const Input = ({
  half,
  name,
  autoFocus,
  handleChange,
  handleShowPassword,
  label,
  type,
}) => {
  return (
    <Grid xs={6} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        autoFocus={autoFocus}
        variant="outlined"
        label={label}
        required
        fullWidth
        type={type}
        InputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input;
