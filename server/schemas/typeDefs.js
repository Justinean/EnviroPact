const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    companyCount: Int
    savedCompanies: [Company]!
  }
  type Company {
    companyId: ID
    companyName: String
    exchangeSymbol: String
    stockSymbol: String
    environmentGrade: String
    environmentLevel: String
    socialGrade: String
    socialLevel: String
    governanceGrade: String
    governanceLevel: String
    totalGrade: String
    totalLevel: String
    lastProcessingDate: String
    environmentScore: Int
    socialScore: Int
    governanceScore: Int
    total: Int
    goals: [Goals]!
  }
  type Goals {
    goalsId: ID
    companyName: String
    exchangeSymbol: String
    stockSymbol: String
    goalsDetails: [Details]!
  } 

  type Details {
    timestamp: String
    score: Int
    sasb: String
    sdg: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    followCompany(companyId: ID, companyName: String, exchangeSymbol: String, stockSymbol: String, environmentGrade: String, environmentLevel: String, socialGrade: String, socialLevel: String, governanceGrade: String, governanceLevel: String,totalGrade: String, totalLevel: String, lastProcessingDate: String, environmentScore: Int, socialScore: Int, governanceScore: Int, total: Int): User
    unfollowCompany(companyId: ID): User
  }
`;

module.exports = typeDefs;