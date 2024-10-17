import { gql } from '@apollo/client';

// Add a new user (for signup)
export const ADD_USER = gql`
  mutation AddUser($input: AddUserInput!) {
    addUser(input: $input) {
      id
      firstName
      lastName
      email
      token
    }
  }
`;

// Add a new employee
export const ADD_EMPLOYEE = gql`
  mutation AddEmployee($input: AddEmployeeInput!) {
    addEmployee(input: $input) {
      id
      firstName
      lastName
      email
      position
      startDate
    }
  }
`;

// Update employee details
export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID!, $input: UpdateEmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      position
      startDate
    }
  }
`;

// Add a new event
export const ADD_EVENT = gql`
  mutation AddEvent($input: AddEventInput!) {
    addEvent(input: $input) {
      id
      name
      date
      photo
    }
  }
`;