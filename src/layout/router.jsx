import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Container from "./container";
import { lazy } from "react";
import { PrivateRouter } from "../components/common";

const UserRegisterPage = lazy(() => import("../pages/user/user-register-page"));
const LoginPage = lazy(() => import("../pages/user/login-page"));
const AllCoursesPage = lazy(() => import("../pages/course/all-courses-page"));
const CourseCheckoutPage = lazy(() =>
  import("../pages/course/course-checkout-page")
);
const CreateCoursePage = lazy(() =>
  import("../pages/course/create-course-page")
);

const ListCoursesPage = lazy(() => import("../pages/course/list-courses-page"));
const CreateVideoPage = lazy(() => import("../pages/videos/create-video-page"));
const LearningPage = lazy(() => import("../pages/course/learning-page"));
const CoursePage = lazy(() => import("../pages/course/course-page"));

export const router = createBrowserRouter([
  {
    element: (
      <PrivateRouter>
        <Container />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <AllCoursesPage />,
      },
      {
        path: "/checkout/:id",
        element: <CourseCheckoutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create-course",
        element: <CreateCoursePage />,
      },
      {
        path: "/courses",
        element: <ListCoursesPage />,
      },
      {
        path: "/video/:courseId",
        element: <CreateVideoPage />,
      },
      {
        path: "/learning",
        element: <LearningPage />,
      },
      {
        path: "/course/:id",
        element: <CoursePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <UserRegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
