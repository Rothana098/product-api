import pool from "../config/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!price || price <= 0) {
      return res.status(400).json({ error: "Valid price is required" });
    }

    const [result] = await pool.query(
      "INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
      [name, price, description]
    );
    res.status(201).json({ id: result.insertId, name, price, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (price && price <= 0) {
      return res.status(400).json({ error: "Valid price is required" });
    }

    const [result] = await pool.query(
      "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?",
      [name, price, description, req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product Updated Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM products WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
