import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, { username, password }, {
        Credentials: true
      });
      if (response.status === 200) {
        setRedirect(true);
      } else {
        setErrorMessage('Wrong credentials');
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setErrorMessage("Something went wrong: " + error.response.data.error);
      }
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <section>
      <h2 className="text-center text-3xl font-semibold text-blue-300">Login</h2>
      <form
        className="w-[36rem] h-[20rem] flex flex-col p-5 gap-4 m-auto shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder='username'
          className="border-2 py-3 pl-2"
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder='password'
          className="border-2 py-3 pl-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="border-2 w-36 m-auto py-3 pl-2 rounded-lg bg-blue-300 text-white">Login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </section>
  );
};

export default Login;
