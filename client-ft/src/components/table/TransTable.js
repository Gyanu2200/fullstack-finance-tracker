import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { deleteTransaction } from "../../utils/axiosHelper.js";

export const TransTable = ({ transaction, fetchTransaction }) => {
  const [itemToDelete, setItemToDelete] = useState([]);
  const calculateTotal = transaction.reduce(
    (acc, { transAmount, type }) =>
      type === "income" ? acc + +transAmount : acc - +transAmount,
    0
  );

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setItemToDelete([...itemToDelete, value]);
    } else {
      return setItemToDelete(itemToDelete.filter((_id) => _id !== value)); //item._id didnot work only if you pass _id destructure then worked
    }
  };

  const handleAllSelect = (e) => {
    const { checked } = e.target;
    if (checked) {
      setItemToDelete(transaction.map((item) => item._id));
    } else {
      setItemToDelete([]);
    }
  };
  console.log(itemToDelete);

  const handleOnDelete = async () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${itemToDelete.length} transaction?`
      )
    ) {
      const { status } = await deleteTransaction(itemToDelete);
      if (status === "success") {
        fetchTransaction();
        setItemToDelete([]);
      }
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleAllSelect}
                checked={
                  transaction.length
                    ? transaction.length === itemToDelete.length
                    : false
                }
              />
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
                    checked={itemToDelete.includes(item._id)}
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
      {itemToDelete.length ? (
        <div className="d-grid">
          <Button variant="danger" onClick={handleOnDelete}>
            item(s) {itemToDelete.length} Delete
          </Button>
        </div>
      ) : null}
    </div>
  );
};
