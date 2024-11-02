import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/nav-bar/navbar";
import HomePage from "./pages/home-page";
import CompanyProfile from "./pages/about-us/company-profile-page";
import ContactPage from "./pages/contact-page";
import ProfesstionalsPage from "./pages/professional-courses/professionals-page";
import ComputerScienceCourses from "./pages/student-courses/computer-science-course-page";
import MissionCoreValues from "./pages/about-us/mission-corevalues";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="/vision" element={<MissionCoreValues />} />
          <Route path="courses/">
            <Route path="professionals" element={<ProfesstionalsPage />} />
            <Route path="students/">
              <Route
                path="computer-science"
                element={<ComputerScienceCourses />}
              />
            </Route>
          </Route>
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
