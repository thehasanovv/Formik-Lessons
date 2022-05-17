// Manually trigering validation

import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  social: {
    facebook: "",
    twitter: "",
  },
};

//prettier-ignore
const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  channel: Yup.string().required('Required'),
  social: Yup.object({
    facebook: Yup.string().required("Required"),
    twitter: Yup.string().required("Required"),
  }),
});

// Custom Validate
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

const onSubmit = (values, actions) => {
  console.log("Form data", values);
  actions.resetForm();
};

const Lesson6 = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            {/* Name */}
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" type="text" />
              {formik.touched.name && formik.errors.name && (
                <div className="error">{formik.errors.name}</div>
              )}
            </div>
            {/* Email */}
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field id="email" name="email" type="email" />
              {formik.touched.email && formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
            </div>
            {/* Channel */}
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field id="channel" name="channel" type="text" />
              {formik.touched.channel && formik.errors.channel && (
                <div className="error">{formik.errors.channel}</div>
              )}
            </div>
            {/* Comments */}
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            {/* Social */}
            <div className="form-control">
              <label className="facebook">Facebook</label>
              <Field type="text" id="facebook" name="social.facebook" />
              {formik.touched.social?.facebook &&
                formik.errors.social?.facebook && (
                  <div className="error">{formik.errors.social.facebook}</div>
                )}
            </div>
            <div className="form-control">
              <label className="twitter">Twitter</label>
              <Field type="text" id="twitter" name="social.twitter" />
              {formik.touched.social?.twitter &&
                formik.errors.social?.twitter && (
                  <div className="error">{formik.errors.social.twitter}</div>
                )}
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Lesson6;
