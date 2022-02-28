import * as React from 'react';
import { Text, View,  Image ,StyleSheet, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2596be',
    borderColor:"black",
    border: "2px solid",
    width:'100%',
    maxHeight:30,
    alignItems: 'center',
    justifyContent: 'center',
    padding:3,
    flexDirection: 'row'
  },
  previewImage:{
    height:20,
    width:20,
    margin:4
  }
});
export default function CharacterCard({image, name,navigation}) {

  return (

    <TouchableOpacity style={styles.container} onPress={()=>{console.log("nada"); navigation.navigate("Detail")}}>
			<Image
        style={styles.previewImage}
				source={image}
			/>
      <Text name={name}>{name}</Text>
    </TouchableOpacity>
  );
}
