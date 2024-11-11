import Container from "../components/container";
import Swipe from "../components/swipe";

const HomePage = () => {
  return (
    <>
      <Swipe />
      <Container>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="w-full md:w-5/12">
            <div className="flex flex-col gap-7 mt-3">
              <h1
                data-aos="fade-right"
                className="text-secondaryBlue sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-4xl "
              >
                Welcome To Skill-Byte
              </h1>
              <div data-aos="fade-right" className="text-gray-600 h-full my-12">
                Skill-Byte is Skill Development and Career Development
                Enterprise. The services offered at Skill-Byte include Placement
                / Employability Training, Technical Training, Aptitude & Soft
                Skills Training, E Learning Platform and Online Assessment
                Portal .
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <img
              data-aos="fade-left"
              src={"/images/home-content1.jpg"}
              width={500}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          <div data-aos="fade-left" className="text-gray-600 indent-10">
            We are passionate about helping individuals achieve their career
            goals. Our placement training programs focus on bridging the gap
            between academic learning and the real-world skills required by
            today’s employers. Whether you’re a fresh graduate looking to
            kickstart your career or a professional seeking to upgrade your
            skills, we offer comprehensive training in programming languages,
            interview preparation, soft skills, and problem-solving techniques.
          </div>
          <div data-aos="fade-right" className="text-gray-600 indent-10">
            With a proven track record of success, expert trainers, and a
            curriculum tailored to meet industry standards, we aim to provide
            not just training but a complete transformation. We believe that
            with the right guidance and support, every individual has the
            potential to secure their desired job. At Prius Academics your
            success is our mission.
          </div>
          <h2
            data-aos="zoom-in-up"
            className="text-center text-secondaryBlue font-semibold text-xl"
          >
            Join us and take the next step toward a brighter future!
          </h2>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
