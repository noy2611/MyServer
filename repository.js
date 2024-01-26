// Description: This file contains the repository for the plans.
const data = require("./data");
const fs = require("fs"); //file system module
const path = require("path"); //path module
const dataPath = path.join(__dirname, "./data.json"); //data.json path

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
  try {
    return data;
  } catch (error) {
    console.error("Error getting data from file:", error);
    return {};
  }
  // return data;
};
//getPlanById
const getPlan = (id) => {
  try {
    let stringId = id.toString();
    return data[stringId];
  } catch (error) {
    console.error("Error getting data from file:", error);
    return {};
  }
};

//createPlan
const postPlan = (newPlan) => {
  try {
    const newId = (Object.keys(data).length + 1).toString();
    data[newId] = newPlan;
    writeDataToFile("create");
    return newPlan;
  } catch (error) {
    console.error("Error getting data from file:", error);
    return {};
  }

};

//updatePlan
const putPlan = (id, updatedPlan) => {
  if (data[id]) {
    try {
      data[id] = { ...data[id], ...updatedPlan };
      writeDataToFile("update");
      return data[id];
    } catch (error) {
      console.error("Error getting data from file:", error);
      return {};
    }
  }
};

//deletePlan
const deletePlan = (id) => {
  if (data[id]) {
    try{
      const deletedPlan = data[id];
      delete data[id];
      writeDataToFile("delete");
      return deletedPlan;
    }catch(error){
      console.error("Error getting data from file:", error);
      return {};
    }
  }
};

module.exports = {
  getPlans,
  getPlan,
  postPlan,
  putPlan,
  deletePlan,
};
