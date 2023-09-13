import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = (props) => {
  return <Text>{props.tilte}</Text>
};
const MyProfile = () => {
  return <Profile
        name="민서"
        uri="https://i.pinimg.com/236x/ea/33/d8/ea33d8bfd81b4f86beebdba49011e157.jpg"
        profileSize={40}
        />
};
const Division = () => {
  return <Text>Division</Text>
};
const FriendSection = () => {
  return <Text>FriendSection</Text>
};
const FriendList = () => {
  return (
    <View>
      <Profile name="고양이" uri="https://i.pinimg.com/236x/ea/33/d8/ea33d8bfd81b4f86beebdba49011e157.jpg" profileSize={30} />
      <Profile name="쿼카" uri="https://i.pinimg.com/236x/ea/33/d8/ea33d8bfd81b4f86beebdba49011e157.jpg" profileSize={30} />
      <Profile name="강아지" uri="https://i.pinimg.com/236x/ea/33/d8/ea33d8bfd81b4f86beebdba49011e157.jpg" profileSize={30} />
      <Profile name="코뿔소" uri="https://i.pinimg.com/236x/ea/33/d8/ea33d8bfd81b4f86beebdba49011e157.jpg" profileSize={30} />
      <Profile name="거북이" uri="https://i.pinimg.com/236x/ea/33/d8/ea33d8bfd81b4f86beebdba49011e157.jpg" profileSize={30} />
    </View>
  )
};

// 함수형 컴포넌트
const Profile = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{ uri: props.uri }}
        style={{
          height: props.profileSize,
          width: props.profileSize,
          borderRadius: 50 }}
      />
      <Text>{props.name}</Text>
    </View>
  )
}

// 클래스형 컴포넌트
// class Profile extends React.Component {
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//        <Image
//         source={{ uri: this.props.uri }}
//         style={{
//           height: this.props.profileSize,
//           width: this.props.profileSize,
//           borderRadius: 50 }}
//         />
//       <Text>{this.props.name}</Text>
//     </View>
//     )
//   }
// }

export default function App() {
  return <View style={styles.container}>
    <Header title="친구" />
    <MyProfile />
    <Division />
    <FriendSection />
    <FriendList />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})