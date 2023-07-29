import { Form } from 'react-router-dom';

import '../../styles/form-page/form-page.css'

const FormPage = ({ title, children }) => {
  return (
    <div className="form-page">
      <div className="form-page__container">
        <h1 className="form-page__title">{title}</h1>
        <Form method="post" className="form-page__form">
          {children}
        </Form>
      </div>
    </div>
  );
};

export default FormPage;