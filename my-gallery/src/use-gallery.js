import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export const useGallery = () => {
    // custom hook은 use로 시작해야 한다 ~~~~~~
    const [images, setImages] = useState([]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            const lastId = images.length === 0 ? 0 : images[images.length - 1].id;
            const newImage = {
                id: lastId + 1,
                uri: result.assets[0].uri,
            }
            setImages([
                ...images, newImage
            ]);
        }
    }

    const deleteImage = (imageId) => {
        Alert.alert('이미지를 삭제하시겠습니까❓','',[
            {
                style: 'cancel',
                text: '아니오'
            },
            {
                text: '네',
                onPress: () => {
                    // images에서 삭제된 것 빼고 다시 불러오기
                    const newImages = images.filter((image) => image.id !== imageId);
                    setImages(newImages);
                }
            }
        ]);
    }

    const imagesWithAddButton = [
        {
            id: -1,
            uri: '',
        },
        ...images,
    ]

    useEffect(() => {
        console.log('images', images);
    }, [images])

    return{
        images,
        pickImage,
        deleteImage,
        imagesWithAddButton
    };         
}