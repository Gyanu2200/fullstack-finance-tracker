import userSchema from "./userSchema.js";

export const postUser = (userObj) => {
  return userSchema(userObj).save();
};
export const getUser = () => {
  return userSchema.find();
};
export const updateUser = (_id, userObj) => {
  return userSchema.findByIdAndUpdate(_id, userObj, { new: true });
};
export const deleteUser = (ids) => {
  return userSchema.deleteMany({ _id: { $in: ids } });
};
