import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
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
  phoneNumbers: [""],
  workPlaces: [{ companyName: "", experience: "" }],
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
  workPlaces: Yup.array(
    Yup.object({
      companyName: Yup.string().required("Required"),
      experience: Yup.number().required("Required"),
    })
  )
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
      <Form>
        {/* Name */}
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        {/* Email */}
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        {/* Channel */}
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field id="channel" name="channel" type="text" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        {/* Address */}
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {({ field, form, meta }) => {
              return (
                <div>
                  <input type="text" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        {/* Comments */}
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
        </div>
        {/* Social */}
        <div className="form-control">
          <label className="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
          <ErrorMessage name="social.facebook" component={TextError} />
        </div>
        <div className="form-control">
          <label className="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
          <ErrorMessage name="social.twitter" component={TextError} />
        </div>
        {/* Phone Numbers */}
        <div className="form-control">
          <label>Numbers</label>
          <FieldArray name="phoneNumbers">
            {(props) => {
              const { push, remove, form } = props;
              const { values } = form;
              const { phoneNumbers } = values;
              return (
                <div>
                  {phoneNumbers.map((phoneNumber, index) => (
                    <div key={index}>
                      <Field name={`phoneNumbers[${index}]`} type="text" />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          Remove Number
                        </button>
                      )}
                      <button type="button" onClick={() => push("")}>
                        Add Number
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        {/* WorkPlaces */}
        <div className="form-control">
          <label htmlFor="workPlace">Work Exprerice</label>
          <FieldArray name="workPlaces">
            {(props) => {
              const { push, remove, form } = props;
              const { values, errors } = form;
              const { workPlaces } = values;
              return (
                <div>
                  {workPlaces.map((workPlace, index) => {
                    return (
                      <div key={index}>
                        <label className="subLabel">
                          <i>Company Name</i>
                        </label>
                        <Field
                          name={`workPlaces[${index}].companyName`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`workPlaces[${index}].companyName`}
                          component={TextError}
                        />
                        <label className="subLabel">
                          <i>Year</i>
                        </label>
                        <Field
                          name={`workPlaces[${index}].experience`}
                          type="number"
                        />
                        <ErrorMessage
                          name={`workPlaces[${index}].experience`}
                          component={TextError}
                        />
                        <span>
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              Remove work place
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            Add work place
                          </button>
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </FieldArray>
        </div>
        {/* Submit Button */}
        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Lesson4;
