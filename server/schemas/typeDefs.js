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
    esg_id: ID
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
  
`;