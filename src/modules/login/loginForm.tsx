import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { FormContainer, Input, Button, SocialButton, SocialButtonContainer } from './LoginFormStyle';

const LoginForm = () => {
  return (
    <FormContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <h2>Login</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button whileHover={{ scale: 1.05 }}>Login</Button>
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
