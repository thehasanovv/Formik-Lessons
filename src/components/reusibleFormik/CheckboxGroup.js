import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import { Fragment } from 'react';

const CheckboxGroup = props => {
    const { label, name, options, ...rest } = props;
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name}>
                {({ field }) =>
                    options.map(option => {
                        return (
                            <Fragment key={option.key}>
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label htmlFor={option.value}>
                                    {option.key}
                                </label>
                            </Fragment>
                        );
                    })
                }
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
};

export default CheckboxGroup;
