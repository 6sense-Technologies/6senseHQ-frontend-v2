import GoogleRecaptchaProviderWrapper from "@/providers/GoogleRecaptchaProviderWrapper";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <GoogleRecaptchaProviderWrapper>
      <ContactForm />
    </GoogleRecaptchaProviderWrapper>
  );
};

export default Contact;
