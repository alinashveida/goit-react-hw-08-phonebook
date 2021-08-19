import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Label, Form } from "./LoginPage.styled";
import { logIn } from "redux/auth/auth-operation";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}

// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// //import { authOperations } from '../redux/auth';
// import { Label, Form } from './LoginPage.styled'
// import { logIn } from 'redux/auth/auth-operation'

// import Button from '@material-ui/core/Button'

// export default function LoginPage() {
//   const dispatch = useDispatch()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value)
//       case 'password':
//         return setPassword(value)
//       default:
//         return
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch(logIn({ email, password }))
//     setEmail('')
//     setPassword('')
//   }

//   return (
//     <div>
//       <h1>Страница логина</h1>

//       <Form
//         onSubmit={handleSubmit}
//         //autoComplete="off"
//       >
//         <Label>
//           Почта
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </Label>

//         <Label>
//           Пароль
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </Label>

//         <Button type="submit" variant="contained" color="primary">
//           Войти
//         </Button>

//         <button type="submit">Войти</button>
//       </Form>
//     </div>
//   )
// }
