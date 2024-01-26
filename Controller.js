const {
  getPlans,
  getPlan,
  postPlan,
  putPlan,
  deletePlan,
} = require("./repository");


const {successLog, errorLog} = require("./logger");

const createPlan = (req, res) => {
  try{
    const plan = req.body;
    const response = postPlan(plan);
    res.statusCode = 201;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(response));
    successLog.info("Plan created successfully");
  }catch(error){
    errorLog.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal server error");
  }
};

const getAllPlans = (req, res) => {
  try{
    const response = getPlans();
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(response));
    successLog.info("Plans fetched successfully");
  }catch(error){
    errorLog.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal server error");
  } 
};

const getPlanById = (req, res) => {
  try{
    const url = req.url;
    const planId =parseInt(url.split("/")[2]);
    const response = getPlan(planId);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(response));
    successLog.info("Plan fetched successfully");
  }catch(error){
    errorLog.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal server error");
  }
};

const updatePlan = (req, res) => {
  try{
    const url = req.url;
    const planId =parseInt(url.split("/")[2]);
    const plan = req.body;
    const response = putPlan(planId, plan);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(response));
    successLog.info("Plan updated successfully");
  }
  catch(error){
    errorLog.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal server error");
  }
}

const deletePlabById = (req, res) => {
  try{
    const url = req.url;
    const planId =parseInt(url.split("/")[2]);
    const response = deletePlan(planId);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(response));
    successLog.info("Plan deleted successfully");
  }
  catch(error){
    errorLog.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal server error");
  }
};

module.exports = {
  getAllPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlabById,
}