import React, { useEffect, useState } from "react";
import { TransForm } from "../components/form/TransForm";

import { Layout } from "../components/layout/Layout";
import { TransTable } from "../components/table/TransTable";
import { getTransaction } from "../utils/axiosHelper";

export const Dashboard = () => {
  const [transaction, setTransaction] = useState([]);
  const fetchTransaction = async () => {
    const data = await getTransaction();
    setTransaction(data);
    console.log(data);
  };
  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <Layout>
      <TransForm fetchTransaction={fetchTransaction} />
      <TransTable transaction={transaction} />
    </Layout>
  );
};
