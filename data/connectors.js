import casual from 'casual';
import Mongoose from 'mongoose';
import _ from 'lodash';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/graphql', {
  useMongoClient: true
});

// Model
const ProductSchema = Mongoose.Schema({
  title: String,
  price: Number
});

const ProductVariantSchema = Mongoose.Schema({
  productId: String,
  sku: String,
  status: String
});

const ProductVariantQuantitySchema = Mongoose.Schema({
  id: Number,
  productVariantId: String,
  quantity: Number
});

const ProductVariantPriceSchema = Mongoose.Schema({
  id: Number,
  productVariantId: String,
  price: Number
});

const Product = Mongoose.model('products', ProductSchema);
const ProductVariant = Mongoose.model('productvariants', ProductVariantSchema);
const ProductVariantQuantity = Mongoose.model('productvariantquantities', ProductVariantQuantitySchema);
const ProductVariantPrice = Mongoose.model('productvariantprices', ProductVariantPriceSchema);

// casual.seed(123);
// _.times(10, () => {
//   return Product.create({
//     title: casual.first_name,
//     price: casual.integer(10, 100)
//   }).then((product) => {
//     return  ProductVariant.create({
//       productId: product._id,
//       sku: casual.last_name,
//       status: "available"
//     }).then((productVariant) => {
//       ProductVariantQuantity.create({
//         productVariantId: productVariant._id,
//         quantity: casual.integer(0, 50)
//       })

//       ProductVariantPrice.create({
//         productVariantId: productVariant._id,
//         price: casual.integer(10, 100)
//       })
//     })
//   })
// })

export { Product, ProductVariant, ProductVariantQuantity, ProductVariantPrice };