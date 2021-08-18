import { useState } from "react";
import { useDispatch } from "react-redux";
//import { authOperations } from '../redux/auth';
import { Form, Label } from "./RegisterPage.styled";
import { register } from "redux/auth/auth-operation";

export default function RegisterView() {
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
    <div>
      <h1>Страница регистрации</h1>

      <Form onSubmit={handleSubmit}>
        <Label>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <button type="submit">Зарегистрироваться</button>
      </Form>
    </div>
  );
}
