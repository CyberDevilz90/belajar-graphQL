const { ApolloServer} = require('apollo-server')
const mongoose = require('mongoose');

const typeDefs = require('./schema')
const resolver = require('./resolvers')

// Connect to the mongoDB
main().catch(err => console.log(err))

async function main() {
    mongoose.connect('mongodb://localhost:27017/belajar-graphql')
}

const server = new ApolloServer({typeDefs, resolver})

server.listen()
    .then(({url}) => {
        console.log(`server listening on ${url}`)
    })