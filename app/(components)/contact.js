import ContactForm from "./contact/contactForm";

const Contact = () => {
  const { TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY } = process.env;
  return (
    <section className="contact" id="contact">
      <h2 className="title">
        <span>Contact Form</span>
      </h2>
      <ContactForm
        template={TEMPLATE_ID}
        service={SERVICE_ID}
        publicKey={PUBLIC_KEY}
      />
    </section>
  );
};

export default Contact;
