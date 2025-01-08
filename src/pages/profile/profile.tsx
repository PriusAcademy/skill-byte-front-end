import { useEffect, useState } from "react";
import DesktopNavbar from "./desktop-nav-bar";
import { getUser, UserData } from "../../utils/isAuthorized";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container";
import MobileNavBar from "./mobile-nav-bar";
import AssignMentContent from "./assignment-content";
// import { signOut } from "../../utils/utils";

export type ContentBody = "ASSIGNMENT" | "REPORTS" | "CERTIFICATE" | "DEFAULT";

const ProfilePage = () => {
  const user = getUser();

  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.id) {
      navigate("/");
    }
  }, [navigate, user]);

  const mapper: Record<ContentBody, JSX.Element> = {
    DEFAULT: DefaultContent({ user }),
    ASSIGNMENT: <AssignMentContent />,
    CERTIFICATE: <Container>Certificate</Container>,
    REPORTS: <Container>Reports</Container>,
  };

  const [currentItem, setCurrentItem] = useState<ContentBody>("DEFAULT");
  const side_bar_items: { name: ContentBody; isActive: boolean }[] = [
    {
      name: "ASSIGNMENT",
      isActive: currentItem == "ASSIGNMENT",
    },
    {
      name: "REPORTS",
      isActive: currentItem == "REPORTS",
    },
    {
      name: "CERTIFICATE",
      isActive: currentItem == "CERTIFICATE",
    },
  ];

  const changeContent = (content: ContentBody) => {
    setCurrentItem(content);
  };
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <DesktopNavbar data={side_bar_items} onClick={changeContent} />
      <MobileNavBar data={side_bar_items} onClick={changeContent} />
      <div className="flex-1 h-full bg-gradient-to-b to-cyan-400 from-blue-500">
        {mapper[currentItem]}
      </div>
    </div>
  );
};

export default ProfilePage;

const DefaultContent = ({ user }: { user: UserData }) => {
  return (
    <Container>
      <div>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-white">
          Welcome Back, {user.name}
        </h2>
      </div>
    </Container>
  );
};
