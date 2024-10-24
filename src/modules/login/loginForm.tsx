// src/modules/login.tsx
import { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { FormContainer, Input, Button, SocialButton, SocialButtonContainer } from './LoginFormStyle';
import useLogin from './loginHook';
import InputEmail from '../../components/common/InputEmail';

const LoginForm = () => {
  const { login, loading, error: loginError } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string | null; password?: string }>({});

  const handleSubmit = async () => {
    const validationErrors: { email?: string; password?: string } = {};

    // Validación de contraseña
    if (!password) {
      validationErrors.password = 'Password cannot be empty';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const response = await login(email, password);
    console.log(response); // Manejar la respuesta (guardar tokens, redireccionar, etc.)
  };

  return (
    <FormContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <h2>Login</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>} {/* Mostrar error de login */}

      {/* Usamos el componente InputEmail */}
      <InputEmail value={email} onChange={setEmail} setError={(error) => setErrors({ ...errors, email: error })} />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} {/* Mostrar error de email */}

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} {/* Mostrar error de contraseña */}

      <Button whileHover={{ scale: 1.05 }} onClick={handleSubmit} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>

      <p>or login with</p>
      <SocialButtonContainer>
        <SocialButton whileHover={{ scale: 1.05 }}>
          <FaGoogle size={20} />
          Google
        </SocialButton>
        <SocialButton whileHover={{ scale: 1.05 }}>
          <FaFacebook size={20} />
          Facebook
        </SocialButton>
      </SocialButtonContainer>
    </FormContainer>
  );
};

export default LoginForm;
