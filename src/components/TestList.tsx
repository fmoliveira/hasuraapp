import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const TEST_LIST = gql`
  {
    Test {
      id
      name
    }
  }
`;

export default function TestList() {
  const { loading, error, data } = useQuery(TEST_LIST);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  const testItems = data.Test.map((item) => {
    const { id, name } = item;
    return (
      <View key={id}>
        <Text>{name}</Text>
      </View>
    );
  });

  return (
    <View>
      {testItems}
    </View>
  )
}
