import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { register } from "redux/auth/auth-operation";

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

export default function RegisterView() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    console.log(name, email, password);
    dispatch(register({ name, email, password }));
    setName("");
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
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={handleChange}
          />
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
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

// export default function RegisterView() {
//   const dispatch = useDispatch()
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         return setName(value)
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
//     console.log(name, email, password)
//     dispatch(register({ name, email, password }))
//     setName('')
//     setEmail('')
//     setPassword('')
//   }

//   return (
//     <div>
//       <h1>Страница регистрации</h1>

//       <Form onSubmit={handleSubmit}>
//         <Label>
//           Имя
//           <input type="text" name="name" value={name} onChange={handleChange} />
//         </Label>

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

//         <button type="submit">Зарегистрироваться</button>
//       </Form>
//     </div>
//   )
// }
