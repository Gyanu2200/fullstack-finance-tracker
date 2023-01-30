import React from "react";
import { TransForm } from "../components/form/TransForm";

import { Layout } from "../components/layout/Layout";

export const Dashboard = () => {
  return (
    <Layout>
      <TransForm />
      <div className="table">table here</div>
    </Layout>
  );
};
