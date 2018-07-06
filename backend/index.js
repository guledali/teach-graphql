const { GraphQLServer } = require('graphql-yoga')



// Sample data not important!!!
const sampleItems = [
  {name: 'Apple'},
  {name: 'Banana'},
  {name: 'Orange'},
  {name: 'Melon'},
]


//  Creating your schema for graphql
const typeDefs = `
# This is our roottype

  type Query {
    items: [Item!]!
  }

# This is our datatype

  type Item {
    name: String!
  }
`


// Resolvers functions is last step when you have defined your schema
const resolvers = {
  Query: {
    // Our datatype returns our sampledata
    items: () => sampleItems,
  },
}

const options = { port: 4000 }
const server = new GraphQLServer({ typeDefs, resolvers })

// Run on cmd node index.js and visit http://localhost:4000 you will see the graphql playground explore your api!

server.start(options, () => console.log('Server is running on localhost:' + options.port))
