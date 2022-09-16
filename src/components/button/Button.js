import { StyledButton } from "./ButtonStyle";

function Button({ title, width, height, color, onClick, type, icon }) {
  return (
    <StyledButton
      width={width}
      height={height}
      color={color}
      onClick={onClick}
      type={type}
    >
      {icon} {title}
    </StyledButton>
  );
}

export default Button;
