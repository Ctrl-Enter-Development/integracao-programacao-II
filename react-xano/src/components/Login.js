import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://x8ki-letl-twmt.n7.xano.io/api:bnOR3s23/auth/login',
        {
          email: email,
          password: password,
        }
      );

      // Armazena o token de autenticação
      setAuthToken(response.data.authToken);
      // Chama a função de login passada por propriedade
      onLogin(response.data.authToken);

      // Você pode realizar ações adicionais após o login, se necessário
      console.log('Login bem-sucedido! Token:', response.data.authToken);
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <div>
      <h1>Xano Login</h1>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>

      {/* Mostra o token de autenticação, apenas para fins de demonstração */}
      {authToken && <div>Token de Autenticação: {authToken}</div>}
    </div>
  );
};

export default Login;
