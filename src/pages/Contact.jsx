
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';


const Contact = () => {
  const sendEmail = (values) => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Thank you for reaching out!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Oops! Something went wrong.');
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Us</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div>
              <label>Name</label>
              <Field 
                type="text" 
                name="name" 
                className="form-input" 
              />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div>
              <label>Email</label>
              <Field 
                type="email" 
                name="email" 
                className="form-input" 
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div>
              <label>Message</label>
              <Field 
                as="textarea" 
                name="message" 
                className="form-textarea" 
                rows="5"
              />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default Contact;
