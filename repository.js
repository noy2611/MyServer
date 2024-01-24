
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
  const newId = (Object.keys(data).length + 1).toString(); // Generate a new ID
  // newPlan.id = newId;
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
  const index = data.findIndex((plan) => plan.id === id);
  if (index !== -1) {
    const deletedPlan = data.splice(index, 1);
    return deletedPlan[0];
  }
};
module.exports = {
  getPlans,
  getPlan,
  postPlan,
  putPlan,
  deletePlan,
};
