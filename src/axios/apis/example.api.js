import axios from "axios";

export default {
  getExampleData(param, opt) {
    return axios.get("get/example", param, opt)
  }
}