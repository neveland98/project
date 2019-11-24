import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="Username" bsSize="large">
            <FormLabel >Username</FormLabel >
            <FormControl
              autoFocus
              type="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel >Password</FormLabel >
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}