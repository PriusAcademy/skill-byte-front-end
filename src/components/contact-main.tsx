import Container from "./container";
import ContactDetails from "./contact-details";

const ContactMain = () => {
  return (
    <div>
      <img
        src="/images/contact-us.jpg"
        className="h-[500px] lg:h-[700px] w-[1900px] "
        alt=""
      />
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-bold text-blue-900">Get In Touch</h1>
            <p className="text-md text-gray-600">
              Connect with us to find out more, or discover exciting job
              opportunities to help propel your career today!
            </p>
          </div>

          <ContactDetails />
        </div>
      </Container>
    </div>
  );
};

export default ContactMain;
