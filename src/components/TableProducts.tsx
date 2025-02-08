import React from "react";
import CustomButton from "./CustomButton";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { products } from "@/data/constants/products";
import Image from "next/image";

const TableProducts = () => {
  return (
    <table className="table-auto  w-full ">
      <thead className="border-b border-zinc-800 ">
        <tr>
          <th>#</th>
          <th>Nome do Produto</th>
          <th>Valor</th>
          <th>Qtd</th>
          <th>imagem</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="text-center border-b border-zinc-300">
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td className="flex justify-center items-center">
              <div className="relative w-20 h-20 bg-blue-300 flex justify-center items-center">
                <Image
                  src={product.image}
                  alt="product image"
                  className=""
                  fill
                />
              </div>
            </td>
            <td style={{ width: "250px" }}>
              {product.actions && (
                <div className="flex gap-1  w-fit pr-3">
                  <CustomButton
                    icon={<IconEdit />}
                    className="bg-transparent text-yellow-400 border-yellow-400"
                  />
                  <CustomButton
                    icon={<IconTrash />}
                    className="bg-transparent text-red-600 border-red-600"
                  />
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProducts;
