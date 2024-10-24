// src/hooks/useLogin.ts
import { useState } from 'react';
import apiAgent from '../../service/agent';


const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiAgent.post('/login', { email, password });
      // Manejar la respuesta (guardar tokens, redireccionar, etc.)
      return response;
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
