import React from 'react';
import { ScrollView, View } from 'react-native';
import MyProfile from './MyProfile';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Margin from './Margin';

// const bottomSpace = getBottomSpace();

export default (props) => {
    // 1. 삼항연산자
    // return props.isOpened ? (
    //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
    //         {props.data.map((item, index) => (
    //             <View key={index}>
    //                 <MyProfile
    //                     uri={item.uri}
    //                     name={item.name}
    //                     introduction={item.introduction}
    //                 />
    //                 <Margin height={13} />
    //             </View>
    //         ))}
    //     </ScrollView>
    // ) : null;

    // 2. if문으로 예외 처리: case를 첫 줄에서 확인 가능
    // if (!props.isOpened) return null;
    // return (
    //         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
    //             {props.data.map((item, index) => (
    //                 <View key={index}>
    //                     <MyProfile
    //                         uri={item.uri}
    //                         name={item.name}
    //                         introduction={item.introduction}
    //                     />
    //                     <Margin height={13} />
    //                 </View>
    //             ))}
    //         </ScrollView>
    // )

    // 3. && 이용: 앞에 값이 false이면 뒤를 체크하지 않음 false return.
    return props.isOpened && (
            <ScrollView showsVerticalScrollIndicator={false} >
                {props.data.map((item, index) => (
                    <View key={index}>
                        <MyProfile
                            uri={item.uri}
                            name={item.name}
                            introduction={item.introduction}
                        />
                        <Margin height={13} />
                    </View>
                ))}
            </ScrollView>
    );
}