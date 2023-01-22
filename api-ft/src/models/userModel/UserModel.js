import userSchema from "./userSchema";

//create user
export const createUser = (newUserObj) => {
  return userSchema(newUserObj).save();
};
// read user @filter must be an object {}
export const getSingleUser = (filter) => {
  return userSchema.find(filter);
};
// update user
export const getUserAndUpdate = (filter, updateObj) => {
  return userSchema.findOneAndUpdate(filter, updateObj);
};
// delete user
export const deleteUserById = (_id) => {
  return userSchema.findByIdAndDelete(_id);
};
