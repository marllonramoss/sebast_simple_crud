import { ProductsProvider } from "@/data/contexts/ProductsContext";
import React, { ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default layout;
