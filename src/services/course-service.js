import http from "./http";

class CourseService {
  static createCourse = (payload) =>
    http
      .post("/course", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);

  static createVideoByCourseId = (payload) =>
    http
      .post("/video", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);

  static checkoutCourse = (payload) =>
    http.post("/course/checkout", payload).then((response) => response.data);

  static getCheckoutCoursesByUserId = (id) =>
    http.get(`/course/checkout/${id}`).then((response) => response.data);

  static getCoursesByUserId = (id) =>
    http.get(`/course/user/${id}`).then((response) => response.data);

  static getCoursesById = (id) =>
    http.get(`/course/${id}`).then((response) => response.data);

  static getAllcourses = () =>
    http.get("/course").then((response) => response.data);
}

export default CourseService;
