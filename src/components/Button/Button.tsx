import { StyledButton } from './Button.styles';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  paddingHeight?: 'small' | 'large';
  disabled?: boolean;
  loading?: boolean;
};

export const Button = ({
  text,
  onClick,
  variant = 'primary',
  paddingHeight = 'large',
  disabled = false,
  loading = false,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      $heightVariant={paddingHeight}
      disabled={disabled || loading}
    >
      {loading ? 'Enviando...' : text}
    </StyledButton>
  );
};
