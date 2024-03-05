import React, { useState } from 'react';
import Login from './components/Login';
import ClientesList from './components/ClientesList';

const App = () => {
  const [authToken, setAuthToken] = useState('');

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  return (
    <div>
      <h1>Seu App Principal</h1>
      {authToken ? (
        <ClientesList authToken={authToken} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
