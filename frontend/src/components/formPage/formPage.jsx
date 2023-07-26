import '../../styles/form-page/form-page.css'

const FormPage = ({ title, children }) => {
  return (
    <div className="form-page">
      <div className="form-page__container">
        <h1 className="form-page__title">{title}</h1>
        <form action="" className="form-page__form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default FormPage;