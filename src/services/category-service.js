import http from "./http";

class CatgoryService {
  static getAllCatgories = async () => {
    const response = await http.get("/category");
    return response.data;
  };
}

export default CatgoryService;
