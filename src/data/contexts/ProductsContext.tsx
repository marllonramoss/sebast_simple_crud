"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

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
  const [products, setProducts] = useState<Product[]>([]);

  // Buscar produtos da API ao carregar o contexto
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const addProduct = async (product: Omit<Product, "id">) => {
    try {
      // Buscar os produtos atuais para saber qual o maior ID
      const response = await fetch("http://localhost:5000/products");
      const data: Product[] = await response.json();

      // Gerar um novo ID incremental
      const newId =
        data.length > 0 ? Math.max(...data.map((p) => p.id)) + 1 : 1;

      const newProduct = { ...product, id: newId, actions: true };

      // Adicionar ao servidor
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) throw new Error("Erro ao adicionar produto");

      // Atualizar o estado local
      setProducts((prev) => [...prev, newProduct]);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  const removeProduct = (id: number) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    }).then(() =>
      setProducts((prev) => prev.filter((product) => product.id !== id))
    );
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
