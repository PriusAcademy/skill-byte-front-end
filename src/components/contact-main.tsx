import Container from "./container";
import ContactDetails from "./contact-details";

const ContactMain = () => {
  return (
    <div>
      <img
        src="/images/contact-us.jpg"
        className=" h-60 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[36rem] 2xl:h-[42rem] w-full bg-cover"
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
          <div className="flex flex-col gap-6 lg:gap-12 lg:flex-row ">
            <ContactDetails
              address={[
                "22/1, SMP Nagar, Kallankattupudur",
                "Kinathukadavu, Coimbatore,",
                "TamilNadu, India-642 109",
                "CIN:U62099TZ2024PTC031018",
              ]}
              title
              email={["HR@skill-byte.com"]}
              phoneNumbers={["+91 86107 73303", "+91 79040 99692"]}
            />

            {/* 
            Contact details:
Registered office Address: Prius IT services pvt ltd,22/1, SMP Nagar, Kallankattupudur, Kinathukadavu, Coimbatore, Tamilnadu, India - 642 109.
Corporate office: Prius IT services pvt ltd,C1-102, Srikaram Shubhadhi, Thaiyur road, Kelambakkam, Chennai, Tamilnadu, India - 603103
CIN:U62099TZ2024PTC031018
            
            */}
            <ContactDetails
              address={[
                "Prius IT services pvt ltd",
                "C1-102, Srikaram Shubhadhi,",
                "Thaiyur road, Kelambakkam,",
                "Chennai, Tamilnadu, India - 603103",
                "CIN:U62099TZ2024PTC031018",
              ]}
              email={["HR@skill-byte.com"]}
              phoneNumbers={["+91 86107 73303", "+91 79040 99692"]}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactMain;
