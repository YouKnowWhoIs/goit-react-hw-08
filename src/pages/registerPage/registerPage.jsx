import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { Register } from "../../redux/auth/authOps";

const initialValues = {
  email: "",
  name: "",
  password: "",
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(6, "Too short!")
      .max(20, "Too long!")
      .required("name is a required!"),
    email: Yup.string()
      .trim()
      .email("This must be available email")
      .required("Email is a required!"),
    password: Yup.string()
      .trim()
      .min(8, "It`s must be min 8 symbols")
      .required("Password is a required!"),
  });

  const handleSumbit = (values, actions) => {
    dispatch(
      Register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <>
      <h2 className="register-text">Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSumbit}
      >
        <Form className="conteiner-form-register">
          <label className="register-label">Email:</label>
          <Field
            type="text"
            name="email"
            placeholder="email..."
            className="form-input-register"
          />
          <ErrorMessage name="email" className="error-message-form" />

          <label className="register-label">Name:</label>
          <Field
            type="text"
            name="name"
            placeholder="name..."
            className="form-input-register"
          />
          <ErrorMessage name="name" className="error-message-form" />

          <label className="register-label">Password:</label>
          <Field
            type="password"
            name="password"
            placeholder="password..."
            className="form-input-register"
          />
          <ErrorMessage name="password" className="error-message-form" />

          <button type="submit" className="register-button">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};
