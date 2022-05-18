import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup';

const initialValues = {
    email: '',
    description: '',
};

const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
});

const onSubmit = values => {
    console.log('form obj', values);
};

const FormikContainer = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl
                        control="input"
                        type="email"
                        label="Email"
                        name="email"
                    />
                    <FormikControl
                        control="textarea"
                        label="Description"
                        name="description"
                    />
                    <FormikControl />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikContainer;
