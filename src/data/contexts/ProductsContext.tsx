"use client";

import React, { createContext, useContext, useState } from "react";
import { Dataproducts } from "../constants/products";

export interface Product {
  id: number;
  nome: string;
  valor: number;
  quantidade: number;
  image?: string;
  actions: boolean;
}

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>(Dataproducts);

  const addProduct = (product: Product) => {
    const newId =
      products.length > 0 ? products[products.length - 1].id + 1 : 1;
    product = {
      ...product,
      id: newId, // Adiciona o ID gerado
      actions: true,
    };
    setProducts((prev) => [...prev, product]);
  };

  const removeProduct = (id: number) => {
    console.log("remove actived");

    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts deve ser usado dentro de um ProductsProvider");
  }
  return context;
};
