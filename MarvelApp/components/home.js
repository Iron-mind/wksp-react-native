import * as React from 'react';
import { Text, View } from 'react-native';
import CharacterCard from './character';
export default function Home(props) {
  return (
    <View style={{ flex: 1 }}>
    <CharacterCard {...props} image={require('../assets/favicon.png')} name='Iron Man' />
      <CharacterCard {...props} image={require('../assets/favicon.png')} name='Iron Mano' />
    </View>
  );
}
