import Form from "@/components/Form";
import VaultInformation from "@/components/VaultInformation";
import React from "react";

const Admin = () => {
  return (
    <main className=" bg-slate-200 overflow-x-hidden pb-5">
      <div className="flex flex-col md:flex-row section pt-6 md:pt-10">
        <Form />
        <VaultInformation />
      </div>
    </main>
  );
};

export default Admin;
