const { gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        _id: ID!,
        title: String!,
        author: String!,
        description: String,
        releaseYear: Int!,
        genre: String!
    }

    type Query {
        getAllBooks: [Book]!
    }

`;

module.exports = typeDefs;