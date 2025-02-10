"use client";

import React, { useEffect } from "react";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { useProducts } from "@/data/contexts/ProductsContext";

const RegisterProductForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { addProduct, editProduct, selectedProduct, setSelectedProduct } =
    useProducts();

  // Atualiza os campos quando um produto for selecionado para edição
  useEffect(() => {
    if (selectedProduct) {
      setValue("nome", selectedProduct.nome);
      setValue("valor", selectedProduct.valor);
      setValue("quantidade", selectedProduct.quantidade);
      setValue(
        "image",
        selectedProduct.image ||
          "https://cdn-icons-png.flaticon.com/512/482/482160.png"
      );
      setValue("actions", true);
    }
  }, [selectedProduct, setValue]);

  const handleSubmitForm = (data: any) => {
    if (!data.image) {
      data.image = "https://cdn-icons-png.flaticon.com/512/482/482160.png";
    }

    if (selectedProduct) {
      // Se estiver editando, chama editProduct
      editProduct(selectedProduct.id, data);
      setSelectedProduct(null); // Reseta o estado de edição
    } else {
      // Se for um novo produto, chama addProduct
      addProduct(data);
    }

    reset(); // Reseta o formulário após o envio
  };

  return (
    <div className="h-fit flex flex-col gap-8">
      <div className="flex justify-center items-center p-4">
        <span className="text-3xl">
          {selectedProduct ? "Editar Produto" : "Cadastro de Produtos"}
        </span>
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
            {...register("image")}
          />
          <button
            className="bg-transparent border border-green-500 text-green-500 rounded-lg w-fit px-4 py-2"
            type="submit"
          >
            {selectedProduct ? "Salvar Edição" : "Inserir"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterProductForm;
