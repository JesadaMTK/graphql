import { Product, ProductVariant, ProductVariantQuantity, ProductVariantPrice } from './connectors';

const resolvers = {
  Query: {
    Product(root, args) {
      return Product.findOne({ title: args.title })
    },
    AllProduct() {
      return Product.find({})
    }
  },
  Product: {
    productVariants(Product) {
      return ProductVariant.find({ productId: Product.id })
    }
  },
  ProductVariant: {
    price(ProductVariant) {
      return ProductVariantPrice.find({ productVariantId: ProductVariant.id })
    },
    quantity(ProductVariant) {
      return ProductVariantQuantity.find({ productVariantId: ProductVariant.id })
    }
  }
}

export default resolvers