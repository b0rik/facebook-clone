import './button.css';

const Button = ({ text, inverted = false, onClick, disabled = false}) => {
  const buttonClassName = `button ${inverted ? 'button--inverted' : ''}`;
  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>{text}</button>
  )
};

export default Button;