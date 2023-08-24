import './form-error.css';

const FormError = ({ children }) => {
  return (
    <div className="form-error">
      <p className="form-error__text">{children}</p>
    </div>
  );
};

export default FormError;