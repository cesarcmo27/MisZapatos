// src/components/InputEmail.tsx
import { useState } from 'react';
import { styled } from 'styled-components';

interface InputEmailProps {
  value: string;
  onChange: (value: string) => void;
  setError: (error: string | null) => void;
}

const InputMail = styled.input`
  width: calc(100% - 20px); /* Deja espacio para el padding */
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Asegura que el padding esté incluido en el ancho total */
`;

const InputEmail: React.FC<InputEmailProps> = ({ value, onChange, setError }) => {
  const [touched, setTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(value)) {
      setError('Invalid email format');
    } else {
      setError(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    if (touched) {
      if (!validateEmail(e.target.value)) {
        setError('Invalid email format');
      } else {
        setError(null);
      }
    }
  };

  return (
    <>
      <InputMail
        type="email"
        placeholder="Email"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

export default InputEmail;
