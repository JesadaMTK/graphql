import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  Product(title: String): Product
  AllProduct: [Product]
}

type Product {
  _id: String
  title: String
  price: Float
  productVariants: [ProductVariant]
}

type ProductVariant {
  _id: String
  productId: String
  sku: String
  status: String
  price: [ProductVariantPrice]
  quantity: [ProductVariantQuantity]
}

type ProductVariantQuantity {
  _id: String
  productVariantId: String
  quantity: Int
}

type ProductVariantPrice {
  _id: String
  productVariantId: String
  price: Float
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
