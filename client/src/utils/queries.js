import { gql } from '@apollo/client';

export const GET_ME = gql`
  query user {
    me {
      _id
      username
      email
      companyCount
      followedCompanies {
        companyId
        companyName
        exchangeSymbol
        stockSymbol
        environmentGrade
        environmentLevel
        socialGrade
        socialLevel
        governanceGrade
        governanceLevel
        totalGrade
        totalLevel
        lastProcessingDate
        environmentScore
        socialScore
        governanceScore
        total
        goals {
          goalsId
          companyName
          exchangeSymbol
          stockSymbol
          goalsDetails {
            timestamp
            score
            sasb
            sdg
          }
        } 
      }
    }
  }
`;