import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

//prettier-ignore
const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required("Required"),
});

const onSubmit = (values) => {
  console.log("Form data", values);
};

const Lesson4 = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // <----------------Optional -------------->
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        <Form style={{ marginTop: "123px" }}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field id="channel" name="channel" type="text" />
            <ErrorMessage name="channel" />
          </div>
          <button type="submit" style={{ marginTop: "15px" }}>
            Submit
          </button>
        </Form>;
      }}
    </Formik>
  );
};

export default Lesson4;
