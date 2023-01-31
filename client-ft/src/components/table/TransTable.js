import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

export const TransTable = ({ transaction }) => {
  const [itemDelete, setItemDelete] = useState([]);
  const calculateTotal = transaction.reduce(
    (acc, { transAmount, type }) =>
      type === "income" ? acc + +transAmount : acc - +transAmount,
    0
  );

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    setItemDelete([...itemDelete]);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>#</th>
            <th>Transaction Type</th>
            <th>Transaction Name</th>
            <th>Income Amount</th>
            <th>Expense Amount</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    value={item._id}
                    onChange={handleOnSelect}
                  />
                </td>
                <td>{i + 1}</td>
                <td>{item.type}</td>
                <td>{item.transName}</td>
                {item.type === "income" ? (
                  <td className="text-success ">{item.transAmount}</td>
                ) : (
                  <td></td>
                )}
                {item.type === "expenses" ? (
                  <td className="text-danger  ">{item.transAmount}</td>
                ) : (
                  <td></td>
                )}
              </tr>
            );
          })}
          <tr className="fw-bold">
            <td colSpan={1}>🟤</td>
            <td colSpan={4}>Total Amount</td>
            <td>{calculateTotal}</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-grid">
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
};
