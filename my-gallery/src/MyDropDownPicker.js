import { Text, View } from 'react-native'

const headerHeight = 50;

export default ({selectedAlbumTitle}) => {
    return (
        <View style={{
            height: headerHeight,
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            <Text style={{ fontWeight: 'bold' }}>{selectedAlbumTitle}</Text>
        </View>
    )
}