import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export default (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'grey' }}>친구 {props.friendProfileLen}</Text>
        
            <TouchableOpacity>
                <MaterialIcons name={props.isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color='lightgrey' onPress={props.onPressArrow} />
            </TouchableOpacity>
        </View>
    );
};