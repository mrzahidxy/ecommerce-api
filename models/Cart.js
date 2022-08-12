const moongose = require('mongoose');

const cartSchema = new moongose.Schema(
    {
        userId: { type: String, required: true },
        product: [
            {
                productId: { type: String, required: true },
                quantity: { type: Number, default: 1 }
            }
        ],
    }, { timestamps: true }
)


module.exports = moongose.model("Cart", cartSchema);