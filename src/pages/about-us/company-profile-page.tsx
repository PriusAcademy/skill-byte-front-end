import Container from "../../components/container";

const CompanyProfilePage = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-5/12">
          <div className="flex flex-col gap-7">
            <h3 className={`text-activeBlue text-2xl font-semibold`}>
              Company Profile
            </h3>
            <h1 className="text-secondaryBlue font-bold text-5xl text-wrap">
              Welcome To Skill Byte
            </h1>
            <div className="text-gray-600 ">
              Skill Byte is Skill Development and Career Development Enterprise.
              The services offered at Skill Byte include Placement /
              Employability Training, Technical Training, Aptitude & Soft Skills
              Training, E Learning Platform and Online Assessment Portal .
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <img src={"/images/about.jpg"} width={500} />
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <div className="text-gray-600 indent-10">
          We are passionate about helping individuals achieve their career
          goals. Our placement training programs focus on bridging the gap
          between academic learning and the real-world skills required by
          today’s employers. Whether you’re a fresh graduate looking to
          kickstart your career or a professional seeking to upgrade your
          skills, we offer comprehensive training in programming languages,
          interview preparation, soft skills, and problem-solving techniques.
        </div>
        <div className="text-gray-600 indent-10">
          With a proven track record of success, expert trainers, and a
          curriculum tailored to meet industry standards, we aim to provide not
          just training but a complete transformation. We believe that with the
          right guidance and support, every individual has the potential to
          secure their desired job. At Skill Byte your success is our mission.
        </div>
        <h2 className="text-center text-secondaryBlue font-semibold text-xl">
          Join us and take the next step toward a brighter future!
        </h2>
      </div>
    </Container>
  );
};

export default CompanyProfilePage;
