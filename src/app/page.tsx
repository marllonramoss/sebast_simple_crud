import CustomButton from "@/components/CustomButton";
import RegisterProductForm from "@/components/RegisterProductForm";
import TableProducts from "@/components/TableProducts";
import React from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const Home = () => {
  return (
    <div className="h-screen container flex justify-center flex-col gap-20">
      <RegisterProductForm />
      <TableProducts />
    </div>
  );
};

export default Home;
