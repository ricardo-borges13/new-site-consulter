import type { ReactNode } from 'react';
import { StyledButton } from './CustomButton.styles';

type ButtonProps = {
  text?: string; // agora opcional
  children?: ReactNode; // 👈 permite ícone, JSX, etc
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline-white' | 'lightPrimary' | 'headerMain';
  paddingHeight?: 'small' | 'large';
  disabled?: boolean;
  loading?: boolean;
};

export const CustomButton = ({
  text,
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  paddingHeight = 'large',
  disabled = false,
  loading = false,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $variant={variant}
      $heightVariant={paddingHeight}
      disabled={disabled || loading}
    >
      {loading ? 'Enviando...' : children ?? text}
    </StyledButton>
  );
};
