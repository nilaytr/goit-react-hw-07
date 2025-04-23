import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const initialValues = { name: '', number: '' };

    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
        number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    });

    const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      ...values,
    };
        dispatch(addContact(newContact));
    resetForm();
  };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
            <Form className={css.form}>
                <div>
                    <label className={css.formLabel} htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component="span">
                        {msg => <span className={css.formError}>{msg}</span>}
                    </ErrorMessage>
                </div>
                <div>
                    <label className={css.formLabel} htmlFor="number">Number</label>
                    <Field type="tel" name="number" id="number" />
                    <ErrorMessage name="number" component="span">
                        {msg => <span className={css.formError}>{msg}</span>}
                    </ErrorMessage>
                </div>
                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm