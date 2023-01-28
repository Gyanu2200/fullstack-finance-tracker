import { Alert } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/customInput/CustomInput";
import { Layout } from "../components/layout/Layout";
import { postUser } from "../utils/axiosHelper";

export const Register = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { data } = await postUser(form);
    setResponse(data);
    console.log(data);
  };
  const inputFields = [
    {
      label: "Name",
      placeholder: "Sam Smith",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
    },
  ];

  // console.log(form);
  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2>Register</h2>
        <hr />

        {/* response display purpose */}
        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item, i) => {
          return <CustomInput key={i} {...item} onChange={handleOnChange} />;
        })}

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="text-end">
          Already have an account ? <Link to="/">Login Now</Link>
        </div>
      </Form>
    </Layout>
  );
};
