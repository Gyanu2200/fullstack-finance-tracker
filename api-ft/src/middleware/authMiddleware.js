import { getSingleUser } from "../modals/userModals/userModal.js";

export const isAuth = async (req, res, next) => {
  //if valid user then return true otherwise false
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    //if this authorization id is valide then got to next middlewaref
    const user = authorization
      ? await getSingleUser({ _id: authorization })
      : null;

    user?._id
      ? next()
      : res.json({
          status: "error",
          message: "unauthorized",
        });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
