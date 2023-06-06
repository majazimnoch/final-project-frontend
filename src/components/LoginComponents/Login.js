import React from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const dispatch = useDispatch();
  const accessToken = useSelector(store => store.user.accessToken)
  return (
    <p> I am the LOG IN component </p>
  )
};

export default Login;