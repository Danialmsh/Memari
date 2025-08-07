'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactSchema, sanitize } from '/public/lib/validation/contact';


export default function ContactForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log('💌 Message sent:', sanitize(JSON.stringify(values, null, 2)));
        alert('پیام شما با موفقیت ارسال شد!');
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <div className="mb-3">
            <label className="form-label">نام</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger small mt-1" />
          </div>

          <div className="mb-3">
            <label className="form-label">ایمیل</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
          </div>

          <div className="mb-3">
            <label className="form-label">پیام</label>
            <Field name="message" as="textarea" rows="4" className="form-control" />
            <ErrorMessage name="message" component="div" className="text-danger small mt-1" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            ارسال
          </button>
        </Form>
      )}
    </Formik>
  );
}
