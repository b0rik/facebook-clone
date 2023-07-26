import '../styles/button.css';

const Button = ({ text, inverted = false}) => {
  const buttonClassName = `button ${inverted ? 'button--inverted' : ''}`;
  return (
    <button className={buttonClassName}>{text}</button>
  )
};

export default Button;