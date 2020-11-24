import React, { useState } from "react";

import { auth , register} from "../api";

const Auth = ({
    setIsLoggedIn,
}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);


  return (
    <form className='login-form'
          onSubmit={(event) => event.preventDefault()}>
      {errorMessage ? <h5 className="error">{errorMessage}</h5> : null}
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
      />
      <button
        onClick={async () => {
          try {
            const data = await auth(username, password, true)
            console.log(data)
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}
      >
        Register
      </button>
      <button
        onClick={async () => {
          try {
            const data = await auth(username, password)   
            console.log(data)
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}>Log In</button>
    </form>
  );
};

export default Auth;