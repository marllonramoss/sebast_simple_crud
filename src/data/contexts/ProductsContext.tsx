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
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  loadProduct: (id: number) => Promise<void>;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  editProduct: (
    id: number,
    updatedProduct: Omit<Product, "id">
  ) => Promise<void>;
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

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const loadProduct = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      if (!response.ok) throw new Error("Produto não encontrado");

      const product = await response.json();
      setSelectedProduct(product); // Atualiza o contexto
    } catch (error) {
      console.error("Erro ao carregar produto:", error);
    }
  };

  const editProduct = async (
    id: number,
    updatedProduct: Omit<Product, "id">
  ): Promise<void> => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updatedProduct, id }),
      });

      if (!res.ok) throw new Error("Erro ao editar produto");

      // Atualiza o estado local
      setProducts((prev) =>
        prev.map((product) =>
          product.id === id ? { ...updatedProduct, id } : product
        )
      );
    } catch (error) {
      console.error("Erro ao editar produto:", error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        addProduct,
        removeProduct,
        loadProduct,
        editProduct,
      }}
    >
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
