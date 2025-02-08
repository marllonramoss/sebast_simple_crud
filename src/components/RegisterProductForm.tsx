import React from "react";
import CustomInput from "./CustomInput";

const RegisterProductForm = () => {
  return (
    <div className="h-fit  flex flex-col gap-8">
      <div className=" flex justify-center items-center p-4">
        <span className="text-3xl">Cadastro de Produtos</span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center gap-6 h-4">
          <CustomInput placeholder="Nome do Produto" />
          <CustomInput placeholder="Valor" />
          <CustomInput placeholder="Qtd" />
        </div>
        <CustomInput placeholder="Url da imagem" />
        <button className="bg-transparent border border-green-500 text-green-500 rounded-lg w-fit px-4 py-2 ">
          Inserir
        </button>
      </div>
    </div>
  );
};

export default RegisterProductForm;
