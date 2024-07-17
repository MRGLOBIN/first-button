import React from "react";

import "./button.styles.css";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
