import { Product } from "../contexts/ProductsContext";

export const Dataproducts: Product[] = [
  {
    id: 1,
    nome: "Tênis Esportivo",
    valor: 199.99,
    quantidade: 10,
    image:
      "https://images.pexels.com/photos/3616993/pexels-photo-3616993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actions: true,
  },
  {
    id: 2,
    nome: "Camiseta Dry Fit",
    valor: 79.99,
    quantidade: 25,
    image:
      "https://images.pexels.com/photos/3616993/pexels-photo-3616993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actions: true,
  },
  {
    id: 3,
    nome: "Relógio Smart",
    valor: 299.99,
    quantidade: 15,
    image:
      "https://images.pexels.com/photos/3616993/pexels-photo-3616993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actions: true,
  },
  {
    id: 4,
    nome: "Mochila Resistente",
    valor: 149.99,
    quantidade: 8,
    image:
      "https://images.pexels.com/photos/3616993/pexels-photo-3616993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actions: true,
  },
  {
    id: 5,
    nome: "Garrafa Térmica",
    valor: 49.99,
    quantidade: 20,
    image:
      "https://images.pexels.com/photos/3616993/pexels-photo-3616993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actions: true,
  },
] as const;
