import http from "./http";

class UserService {
  static login = (payload) =>
    http.post("/user/login", payload).then((response) => response.data);

  static createUser = (payload) =>
    http.post("/user", payload).then((response) => response.data);
}

export default UserService;
