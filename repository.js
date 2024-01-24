
// Description: This file contains the repository for the plans.
const data = require("./data");

//getAllPlans
const getPlans = () => {
  return data;
};
// //getPlanById
const getPlan = (id) => {
  let stringId = id.toString();
  return data[stringId];y
};

//createPlan
const postPlan = (newPlan) => {
  const newId = (Object.keys(data).length + 1).toString(); 
  data[newId] = newPlan;
  return newPlan;
};

 //updatePlan
const putPlan = (id, updatedPlan) => {
  if (data[id]) {
    data[id] = { ...data[id], ...updatedPlan };
    return data[id];
  }
};

//deletePlan
const deletePlan = (id) => {
  if (data[id]) {
    const deletedPlan = data[id];
    delete data[id];
    return deletedPlan;
  }
};

module.exports = {
  getPlans,
  getPlan,
  postPlan,
  putPlan,
  deletePlan,
};
