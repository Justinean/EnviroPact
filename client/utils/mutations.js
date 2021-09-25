import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        companyCount
      }
    }
  }
`

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        companyCount
      }
    }
  }
`

export const FOLLOW_COMPANY = gql`
  mutation followCompany($companyId: ID, $companyName: String, $exchangeSymbol: String, $stockSymbol: String, $environmentGrade: String, $environmentLevel: String, $socialGrade: String, $socialLevel: String, $governanceGrade: String, $governanceLevel: String, $totalGrade: String, $totalLevel: String, $lastProcessingDate: String, $environmentScore: Int, $socialScore: Int, $governanceScore: Int, $total: Int) {
    followCompany(companyId: $companyId, companyName: $companyName, exchangeSymbol: $exchangeSymbol, stockSymbol: $stockSymbol, environmentGrade: $environmentGrade, environmentLevel: $environmentLevel, socialGrade: $socialGrade, socialLevel: $socialLevel, governanceGrade: $governanceGrade, governanceLevel: $governanceLevel, totalGrade: $totalGrade, totalLevel: $totalLevel, lastProcessingDate: $lastProcessingDate, environmentScore: $environmentScore, socialScore: $socialScore, governanceScore: $governanceScore, total: $total) {
      _id
      username
      email
      companyCount
      savedCompanies {
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
`

export const UNFOLLOW_COMPANY = gql`
  mutation unfollowCompany($companyId: ID) {
    unfollowCompany(companyId: $companyId) {
      _id
      username
      email
      companyCount
      savedCompanies {
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
`