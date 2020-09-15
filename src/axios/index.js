import "./axios.config.js";

// *.api.js 文件在这里配置
const apiModules = [
  "example"

];


let api = {}
for (let item of apiModules) {
  import(`./apis/${item}.api.js`).then(obj => {
    Object.assign(api, obj.default);
  });
}

export default api;