// Description: This file contains the repository for the plans.
const data = require("./data");
const fs = require('fs');//file system module
const path = require('path');//path module
const dataPath = path.join(__dirname, './data.json');//data.json path

let dataP = require(dataPath);

//writeDataToFile function to write data to file (data.json)
const writeDataToFile = (operationType) => {
  const dataToWrite = dataP;
  try {
    fs.writeFileSync(dataPath, JSON.stringify(dataToWrite, null, 2));
    console.log(`Data ${operationType}d to file successfully.`);
  } catch (error) {
    console.error(`Error ${operationType}ing data to file:`, error);
  }
};

//getAllPlans
const getPlans = () => {
  return data;
};
//getPlanById
const getPlan = (id) => {
  let stringId = id.toString();
  return data[stringId]; 
};

//createPlan
const postPlan = (newPlan) => {
  const newId = (Object.keys(data).length + 1).toString();
  data[newId] = newPlan;
  writeDataToFile('create');
  return newPlan;
};

//updatePlan
const putPlan = (id, updatedPlan) => {
  if (data[id]) {
    data[id] = { ...data[id], ...updatedPlan };
    writeDataToFile('update');
    return data[id];
  }
};

//deletePlan
const deletePlan = (id) => {
  if (data[id]) {
    const deletedPlan = data[id];
    delete data[id];
    writeDataToFile('delete');
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
