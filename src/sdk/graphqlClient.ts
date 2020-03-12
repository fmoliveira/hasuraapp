import ApolloClient from "apollo-boost";
import { GRAPHQL_URL, GRAPHQL_HASURA_ADMIN_SECRET } from "react-native-dotenv";

const graphqlClient = new ApolloClient({
  uri: GRAPHQL_URL,
  headers: {
    "X-Hasura-Admin-Secret": GRAPHQL_HASURA_ADMIN_SECRET
  }
});

export default graphqlClient;
