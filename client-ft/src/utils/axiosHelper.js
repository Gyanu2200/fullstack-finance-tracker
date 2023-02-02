import axios from "axios";
import { Next } from "react-bootstrap/esm/PageItem";

const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";
const transUrl = rootUrl + "/transaction";

//send data to server to add to db
export const postUser = (formData) => {
  try {
    return axios.post(userUrl, formData);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//fetch all data from the server
export const getUser = (loginData) => {
  try {
    return axios.post(userUrl + "/login", loginData);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//send data to switch the task

//send data to delete from db

//transaction:

export const getUserIdFromSessionStorage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user._id;
};
export const postTransaction = async (transData) => {
  try {
    const userId = getUserIdFromSessionStorage();
    const { data } = await axios.post(transUrl, transData, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getTransaction = async () => {
  try {
    const userId = getUserIdFromSessionStorage();
    const { data } = await axios.get(transUrl, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "errror",
      message: error.message,
    };
  }
};

export const deleteTransaction = async (_ids) => {
  try {
    const userId = getUserIdFromSessionStorage();

    const { data } = await axios.delete(
      transUrl,

      {
        headers: {
          Authorization: userId,
        },
        data: _ids,
      }
    );
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
