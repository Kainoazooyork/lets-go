// client/src/components/Signup.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/queries';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Signup</h4>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
      {error && <div>Signup failed</div> && <div><p>{JSON.stringify(error)}</p></div>}
    </div>
  );
};

export default Signup;
