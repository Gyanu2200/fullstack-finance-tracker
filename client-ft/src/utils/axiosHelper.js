import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";

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
