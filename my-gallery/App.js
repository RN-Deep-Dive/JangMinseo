import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, SafeAreaView, Platform, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useGallery, deleteImage } from './src/use-gallery';

export default function App() {
  const { images, pickImage, deleteImage, imagesWithAddButton } = useGallery();
  // id: number; uri: string;

  const onPressOpenGallery = () => {
    pickImage();
  }
  const onLongPressImage = (imageId) => { deleteImage(imageId); }
  
  const renderItem = ({ item: {id, uri}, index }) => {
    
    if (id === -1) {
      return (
        <TouchableOpacity
          style={{
            width: columnSize, height: columnSize,
            backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'
          }}
          onPress={onPressOpenGallery}
        >
          <Text style={{ fontWeight: '400', fontSize: 30, color: 'grey' }}>+</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onLongPress={() => onLongPressImage(id)}>
          <Image source={{ uri }} style={{ width: columnSize, height: columnSize }}/>
        </TouchableOpacity>
    )
    }
  }

  const width = Dimensions.get('screen').width;
  const columnSize = width / 3;

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="갤러리 열기" onPress={onPressOpenGallery} /> */}
      <FlatList
        data={imagesWithAddButton}
        renderItem={renderItem}
        numColumns={3}
      />      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0, // x-ipohne helper 등을 통해 필요한 만큼
  },
});
