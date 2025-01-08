import { User2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/profile")}
      className="bg-gray-200 p-1 rounded-full cursor-pointer"
    >
      <User2Icon />
    </div>
  );
};

export default Profile;
