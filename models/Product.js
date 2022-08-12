const moongose = require('mongoose');

const productSchema = new moongose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        categries: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: String, required: true },

    }, { timestamps: true }
)


module.exports = moongose.model("Product", productSchema);