import { ComponentChildren } from 'preact';

export type ButtonProps = {
  children?: ComponentChildren;
};

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
