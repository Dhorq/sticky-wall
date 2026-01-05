import Product from "./../models/productModel.js";

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find();

    if (product < 1) {
      return res
        .status(404)
        .json({ success: false, message: "Please add product" });
    }

    res.status(200).json({
      success: true,
      message: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(500)
        .json({ success: false, message: "All fields are required" });
    }

    const product = new Product({ name, description });

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(500)
        .json({ success: false, message: "All fields are required" });
    }

    await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
