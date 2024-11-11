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
import EventsPage from "./pages/events-page";
import GalleryPage from "./pages/gallery-page";
import CareerPage from "./pages/career-page";
import NotFound from "./pages/not-found-page";
import CoursesHomePage from "./pages/courses-home-page";
import TestIndexPage from "./components/test-pages/test-index-page";
import TestPage from "./components/test-pages/test-page";

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
          <Route path="company-profile/" element={<CompanyProfile />} />
          <Route path="/vision/" element={<MissionCoreValues />} />
          <Route path="courses/">
            <Route path="professionals/" element={<ProfesstionalsPage />} />
            <Route path="students/">
              <Route index element={<CoursesHomePage />} />
              <Route
                path="computer-science"
                element={<ComputerScienceCourses />}
              />
            </Route>

            <Route path=":learner/:major/:specialization/:concept/">
              <Route index element={<TestIndexPage />} />
              <Route path="test/" element={<TestPage />} />
            </Route>
          </Route>
          <Route path="contact/" element={<ContactPage />} />
          <Route path="events/" element={<EventsPage />} />
          <Route path="gallery/" element={<GalleryPage />} />
          <Route path="career/" element={<CareerPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
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
