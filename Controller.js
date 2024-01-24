const {
  getPlans,
  getPlan,
  postPlan,
  putPlan,
  deletePlan,
} = require("./repository");

const createPlan = (req, res) => {
  const plan = req.body;
  const response = postPlan(plan);
  res.statusCode = 201;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(response));
};

const getAllPlans = (req, res) => {
  const response = getPlans();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(response));
};

const getPlanById = (req, res) => {
  const url = req.url;
  const planId =parseInt(url.split("/")[2]);
  const response = getPlan(planId);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(response));
};

const updatePlan = (req, res) => {
  const url = req.url;
  const planId =parseInt(url.split("/")[2]);
  const plan = req.body;
  const response = putPlan(planId, plan);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(response));
}

const deletePlabById = (req, res) => {
  const url = req.url;
  const planId =parseInt(url.split("/")[2]);
  const response = deletePlan(planId);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(response));
};

module.exports = {
  getAllPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlabById,
}