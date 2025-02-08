"use client";

import React from "react";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { useProducts } from "@/data/contexts/ProductsContext";

const RegisterProductForm = () => {
  const { register, handleSubmit } = useForm();

  const { addProduct } = useProducts();

  const handleSubmitForm = (data: any) => {
    console.log(data);

    if (!data.image) {
      data.image = "https://cdn-icons-png.flaticon.com/512/482/482160.png";
    }
    addProduct(data);
  };

  return (
    <div className="h-fit  flex flex-col gap-8">
      <div className=" flex justify-center items-center p-4">
        <span className="text-3xl">Cadastro de Produtos</span>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center gap-6 h-4">
            <CustomInput
              required
              type="text"
              placeholder="Nome do Produto"
              {...register("nome", { required: true })}
            />
            <CustomInput
              required
              type="number"
              placeholder="Valor"
              {...register("valor", { required: true })}
            />
            <CustomInput
              required
              type="number"
              placeholder="Qtd"
              {...register("quantidade", { required: true })}
            />
          </div>
          <CustomInput
            type="text"
            placeholder="Url da imagem"
            {...register("image", { required: false })}
          />
          <button
            className="bg-transparent border border-green-500 text-green-500 rounded-lg w-fit px-4 py-2 "
            type="submit"
          >
            Inserir
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterProductForm;
