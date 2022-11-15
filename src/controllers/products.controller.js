import { Contenedor } from "../models/products.model.js";

export const index = async (req, res) => {
  const contenedor = new Contenedor();

  const products = await contenedor.getAll();

  if (products) {
    res.status(200).json({
      products: products,
    });
  } else {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const show = async (req, res) => {
  // req.query "?id=1"
  // req.params "/:id"
  const { id } = req.params;

  if (id) {
    const contenedor = new Contenedor();
    const product = await contenedor.getById(parseInt(id));

    res.status(200).json({
      product: product,
    });
  } else {
    res.status(400).json({
      message: "Bad Request, missing id",
    });
  }
};
// CRUD
// index - GET ALL ✅
// show - GET ✅
// create - POST
// update - PUT
// destroy - DESTROY
