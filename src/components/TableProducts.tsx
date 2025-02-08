"use client";

import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { ProductsProvider, useProducts } from "@/data/contexts/ProductsContext";

const TableProducts = () => {
  const { products, removeProduct } = useProducts();

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
        {products.map((product, key) => (
          <tr key={key} className="text-center border-b border-zinc-300">
            <td>{product.id}</td>
            <td>{product.nome}</td>
            <td>{product.valor}</td>
            <td>{product.quantidade}</td>
            <td className="flex justify-center items-center">
              <div className="relative w-20 h-20  flex justify-center items-center">
                <Image
                  src={
                    product.image ??
                    "https://cdn-icons-png.flaticon.com/512/482/482160.png"
                  }
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
                    onClick={() => {}}
                  />
                  <CustomButton
                    icon={<IconTrash />}
                    className="bg-transparent text-red-600 border-red-600"
                    onClick={() => removeProduct(product.id)}
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
