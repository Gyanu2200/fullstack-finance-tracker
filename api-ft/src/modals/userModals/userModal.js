import userSchema from "./userSchema.js";

//CRUD operation

//creates user
export const createUser = (newUserObj) => {
  return userSchema(newUserObj).save();
};

//read user
export const getSingleUser = (filter) => {
  return userSchema.findOne(filter);
};

//update user
export const updateSingleUser = (filter, updateObj) => {
  return userSchema.findONeAndUpdate(filter, updateObj);
};

//delete user
export const deleteUserById = (_id) => {
  return userSchema.findByIdAndDelete(_id);
};
