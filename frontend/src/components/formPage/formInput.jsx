import '../../styles/form-page/form-input.css';

const FormInput = ({ id, type, label, placeholder }) => {
  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} className="form-input__input-field" placeholder={placeholder}/>
    </div>
  );
};

export default FormInput;