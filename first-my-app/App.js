import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Switch } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey hey hey !!!!! </Text>
      
      <Image source={require('./moon.png')} style={styles.localImg}/>
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}}
      style={styles.urlImg} />

    <TextInput placeholder='이름' />

    <Button title="Click Me!" onPress={() => {
      console.log('hi');
    }}></Button>

    <Switch value={false}></Switch>

    <ScrollView>
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}} style={styles.urlImg} />
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}} style={styles.urlImg} />
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}} style={styles.urlImg} />
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}} style={styles.urlImg} />
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}} style={styles.urlImg} />
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}} style={styles.urlImg} />
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}} style={styles.urlImg} />
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg'}} style={styles.urlImg} />
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  localImg: {
    width: 100,
    height:100
  },
  urlImg: {
    width: 100,
    height: 100
  }
});
