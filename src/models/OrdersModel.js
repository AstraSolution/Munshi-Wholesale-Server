const { default: mongoose } = require("mongoose");

const ordersSchema = new mongoose.Schema({
  carts: [
    {
      customer_name: {
        type: String,
        required: true,
      },
      customer_name: {
        type: String,
        required: true,
      },
      owner_email: {
        type: String,
        // required: true,
      },
      product_id: {
        type: String,
        required: true,
      },
      unit_price: {
        type: Number,
        required: true,
      },
      total_price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      isDeliverd: {
        type: Boolean,
      },
      cover_image: {
        type: String,
      },
      stock_limit: Number,
      title: String,
    },
  ],
  tranjectionId: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    default: "Processing",
    required: true,
  },
  totalProduct: Number,
  totalPrice: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: new Date(),
  },
  clientEmail: {
    type: String,
    required: true,
  },
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
