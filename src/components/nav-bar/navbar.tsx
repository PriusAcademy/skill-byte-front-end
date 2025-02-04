import { NavLink, Outlet } from "react-router-dom";
import NavItems from "./nav-items";
import ModalProvider from "../../provider/modal-provider";
import TextWithIcon from "../text-with-icon";
import { Mail, MapPinIcon, Phone } from "lucide-react";
import SignInButton from "../sign-in-button";
import { isAuthorized } from "../../utils/isAuthorized";
import Profile from "../profile";
import Footer from "../footer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { ReceivedValueType, setValue } from "../../app/features/learner-slice";
import { API } from "../../utils/connection";

const Navbar = () => {
  const exisitingLearnersData = useAppSelector((state) => state.learner).value;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (exisitingLearnersData.length === 0) {
      const get = async () => {
        const res = await API.get("/learner/");
        const data = res.data as ReceivedValueType[];
        dispatch(setValue(data));
      };
      get();
    }
  }, [exisitingLearnersData, dispatch]);
  return (
    <>
      <div className="hidden lg:flex items-center h-16 gap-8 w-full bg-secondaryBlue justify-center">
        <TextWithIcon
          aosAnimate="fade-right"
          href="tel:+918610773303"
          title="+918610773303"
          Icon={Phone}
        />
        <TextWithIcon
          aosAnimate="flip-right"
          href="mailto:HR@skill-byte.com"
          title="HR@skill-byte.com"
          Icon={Mail}
        />
        <TextWithIcon
          aosAnimate="flip-left"
          title="Coimbatore, Tamilnadu-642109"
          Icon={MapPinIcon}
        />
        <TextWithIcon
          aosAnimate="fade-left"
          title="Chennai, Tamilnadu-603103"
          Icon={MapPinIcon}
        />
      </div>
      <div className="flex flex-col h-screen">
        <div className="h-20 w-full  bg-white flex justify-between">
          <div className="relative flex-1 p-3 max-w-[1200px] mx-auto flex justify-between items-center h-full">
            <NavLink to="/">
              <img
                className="w-[250px] h-[70px]"
                src="/images/skill-byte-logo.jpg"
                alt=""
              />
            </NavLink>
            <NavItems />
          </div>
          <div className="hidden lg:flex items-center mr-10 ml-2">
            {!isAuthorized() ? <SignInButton /> : <Profile />}
          </div>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ModalProvider />
    </>
  );
};

export default Navbar;
