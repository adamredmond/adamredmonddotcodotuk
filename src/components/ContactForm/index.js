import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, FormTextArea, FormEmail, FormButon, FormLabel, FormP } from './ContactForm'

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvjadgg");
  if (state.succeeded) {
      return <FormP>Thanks for that, i'll get back to you as soon as possible</FormP>;
  }
  return (
      <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="email">
        Your Email
      </FormLabel>
      <FormEmail
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <FormLabel htmlFor="message">
        Your Message
      </FormLabel>
      <FormTextArea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <FormButon type="submit" disabled={state.submitting}>
        Submit
      </FormButon>
    </Form>
  );
}
export default ContactForm;