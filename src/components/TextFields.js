import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  inputLabel: {
    left: 24,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}))

const TextFields = () => {
  const classes = useStyles()

  const [name, setName] = React.useState(``)

  const handleChange = () => event => {
    setName(event.target.value)
  }

  return (
    <TextField style={{padding: 24}}
      id="standard-input"
      label="Name"
      className={classes.textField}
      value={name}
      onChange={handleChange()}
      margin="normal"
      InputLabelProps={{
        classes:{
          root: classes.inputLabel
        }
      }}
    />
  )
}

// TextFields.propTypes = {
//   isDefault: PropTypes.bool,
// }
export default TextFields;
