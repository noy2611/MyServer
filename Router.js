const {
  getPlanById,
  getAllPlans,
  createPlan,
  updatePlan,
  deletePlabById,
} = require("./controller");

const router = (req, res) => {
  const { method, url } = req;
  if (method === "GET" && url.startsWith("/plans/")) {
    getPlanById(req, res);
  } else if (method === "GET" && url === "/plans") {
    getAllPlans(req, res);
  } else if (method === "POST" && url === "/plans") {
    createPlan(req, res);
  } else if (method === "PUT" && url.startsWith("/plans/")) {
    updatePlan(req, res);
  } else if (method === "DELETE" && url.startsWith("/plans/")) {
    deletePlabById(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Invalid route");
  }
};
module.exports = { router };
