import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const initialState = {
  type: "",
  transName: "",
  transAmount: "",
};

export const TransForm = () => {
  const [transData, setTransData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setTransData({
      ...transData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transData);
    //call api to send data to database

    //rest the form
    setTransData(initialState);
  };
  return (
    <div>
      <div className="form">
        <Form onSubmit={handleSubmit} className="d-flex-row space-around">
          <Row className="gap-1">
            <Col md={2}>
              <>
                <Form.Select
                  name="type"
                  required
                  onChange={handleChange}
                  value={transData.type}
                >
                  <option value="">Choose</option>
                  <option value="income">Income</option>
                  <option value="expenses">Expense</option>
                </Form.Select>
              </>
            </Col>
            <Col md={5}>
              <>
                <Form.Control
                  onChange={handleChange}
                  name="transName"
                  type="text"
                  placeholder="Transaction Name"
                  value={transData.transName}
                />
              </>
            </Col>
            <Col md={3}>
              <Form.Control
                onChange={handleChange}
                name="transAmount"
                type="number"
                placeholder="Amount"
                value={transData.transAmount}
              />
            </Col>
            <Col md={1}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
