import TransactionSchema from "./TransactionSchema.js";

export const createTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

export const getTransaction = (filter) => {
  return TransactionSchema.find(filter);
};
