import '../styles/button.css';

const Button = ({ text, inverted = false, onClick}) => {
  const buttonClassName = `button ${inverted ? 'button--inverted' : ''}`;
  return (
    <button className={buttonClassName} onClick={onClick}>{text}</button>
  )
};

export default Button;