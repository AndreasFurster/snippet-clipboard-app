import { GraphQLClient } from 'graphql-request'

let _instance = null;

export class Client {
  static getInstance() {
    if (!_instance) {
      _instance = new GraphQLClient(
        process.env.REACT_APP_API_HOST,
        {}
      );
    }

    return _instance;
  }
}