import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/nav-bar/navbar";
import HomePage from "./pages/home-page";
import CompanyProfile from "./pages/about-us/company-profile-page";
import ContactPage from "./pages/contact-page";
import ProfesstionalsPage from "./pages/professional-courses/professionals-page";

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

import CampusDrivePage from "./pages/student-courses/campus-drive-course";
import TopicsIndexPage from "./pages/test/topics-index-page";
// import TestPage from "./pages/test/test-page";
import CoursePage from "./pages/student-courses/course-page";
import { store } from "./app/store";
import SubTopicIndexPage from "./pages/test/sub-topics-index-page";
import CertificationHomePage from "./pages/certifications/certification-home-page";
import { getTestProgressesBySubTopicId } from "./loaders/get-test-progresses-by-subtopic";
import TestingTestPage from "./components/test/testing-test-page";
import { getQuestionsBySubTopicId } from "./loaders/get-questions-by-subTopicId";
import ProfilePage from "./pages/profile/profile";

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
              <Route path="campus-drive" element={<CampusDrivePage />} />
              <Route path=":course/" element={<CoursePage />}></Route>
            </Route>
            <Route path=":learner/:major/:specialization/:categoryId/">
              <Route index element={<TopicsIndexPage />} />
              <Route
                path=":topicId/"
                loader={getTestProgressesBySubTopicId}
                element={<SubTopicIndexPage />}
              ></Route>
            </Route>
          </Route>
          <Route path="certifications/" element={<CertificationHomePage />} />
          <Route path="contact/" element={<ContactPage />} />
          <Route path="events/" element={<EventsPage />} />
          <Route path="gallery/" element={<GalleryPage />} />
          <Route path="career/" element={<CareerPage />} />
          <Route
            path="profile/"
            // loader={getTestProgressesBySubTopicId}
            element={<ProfilePage />}
          />
          <Route
            path="test/:subTopicId/:testProgressId"
            loader={getQuestionsBySubTopicId}
            element={<TestingTestPage />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <Toaster />
    </>
  );
}

export default App;
