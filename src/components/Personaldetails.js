import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Personaldetails(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
        "rank": "string",
        "fullName": "string",
        "gender": "string",
        "dateOfBirth": "2021-04-11T16:44:26.010Z",
        "regiment": "string",
        "division": "string",
        "height": "string",
        "weight": "string",
        "bloodGroup": "string"
      }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };
    
    
    fetch("http://localhost:3000/general-details", {
      method: "POST",
      body: JSON.stringify(data.formInput),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  console.log(props);

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form  onSubmit={handleSubmit}>
          <TextField
            label="RANK"
            id="margin-normal"
            name="rank"
            
            defaultValue={formInput.email}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="NAME"
            id="margin-normal"
            name="fullName"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="GENDER"
            id="margin-normal"
            name="gender"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="DOB"
            id="margin-normal"
            name="dob"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="DD/MM/YYYY"
            onChange={handleInput}
          /><br/>
          <TextField
            label="REGIMENT"
            id="margin-normal"
            name="regiment"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="DIVISION"
            id="margin-normal"
            name="division"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
           <TextField
            label="HEIGHT"
            id="margin-normal"
            name="height"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="(IN CMS)"
            onChange={handleInput}
          />
           <TextField
            label="WEIGHT"
            id="margin-normal"
            name="weight"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="(IN KGS)"
            onChange={handleInput}
          /><br/>
          <TextField
            label="BLOOD GROUP"
            id="margin-normal"
            name="bloodGroup"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="eg.B+ve"
            onChange={handleInput}
          /><br/>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            
          >
            SAVE 
          </Button>
          <a href="/">back</a>
        </form>
      </Paper>
    </div>
  );
}
