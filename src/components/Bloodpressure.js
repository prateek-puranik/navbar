import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
function Bloodpressure(props) {
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
        "systolic": "string",
        "diastolic": "string",
        "pulse": "string",
        "date": "2021-04-11T17:20:04.562Z",
        "notes": "string"
      }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };
    
    
    fetch("http://localhost:3000/blood-pressures", {
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
            label="SYSTOLIC"
            id="margin-normal"
            name="systolic"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="in mm of Hg"
            onChange={handleInput}/><br/>
            <TextField
            label="DIASTOLIC"
            id="margin-normal"
            name="diastolic"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="in mm of Hg"
            onChange={handleInput}/><br/>
             <TextField
            label="PULSE"
            id="margin-normal"
            name="pulse"
            
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="in beats/min"
            onChange={handleInput}/><br/>
            <TextField
            label=""
            id="margin-normal"
            type="datetime-local"
            name="date"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="DD/MM/YY"
            onChange={handleInput}/><br/>
        
          <TextField
            label="NOTES"
            id="margin-normal"
            name="notes"
            multilinerowsMax={4}
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="Note"
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
        </form>
      </Paper>
    </div>
  );
}
export default Bloodpressure