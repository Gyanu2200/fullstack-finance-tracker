import { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { CustomInput } from "../components/customInput/CustomInput";
import { Layout } from "../components/layout/Layout";
import { getUser } from "../utils/axiosHelper";

export const Login = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "g@gmail.com",
    pin: 3334,
  });
  const [response, setResponse] = useState({});
  const handleloginInput = (e) => {
    const { value, name } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
    console.log(value, name);
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(loginForm);
    const { data } = await getUser(loginForm);
    setResponse(data);
    console.log(data);

    //to navigate to dashboard
    if (data.status === "success") {
      navigate("/dashboard");
      sessionStorage.setItem("user", JSON.stringify(data.result));
    }
  };
  const inputFields = [
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
      value: loginForm.email,
    },
    {
      label: "pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
      value: loginForm.pin,
    },
  ];
  return (
    <Layout>
      <Form className="login-page" onSubmit={handleLoginSubmit}>
        <h2>Login (Welcome Back)</h2>
        <hr />

        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item, i) => {
          return <CustomInput key={i} {...item} onChange={handleloginInput} />;
        })}

        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className="text-end">
          New here? <Link to="/register">Register</Link>
        </div>
      </Form>
    </Layout>
  );
};
