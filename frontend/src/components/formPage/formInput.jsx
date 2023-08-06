import '../../styles/form-page/form-input.css';

const FormInput = ({ id, type, label, placeholder, errors = [] }) => {
  const errorsListItems = errors.map((error, index) => <li key={index}>{error.msg}</li>);
  console.log(errors)
  const inputFieldClassName = `form-input__input-field ${errors.length > 0 ? 'form-input__input-field--error' : ''}`;

  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} className={inputFieldClassName} placeholder={placeholder}/>
      <div className="form-input__errors">
        <ul>
          {errorsListItems}
        </ul>
      </div>
    </div>
  );
};

export default FormInput;