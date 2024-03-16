import { HTMLAttributes } from "react";

interface IButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: IButtonProps) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
