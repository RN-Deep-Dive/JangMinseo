import React, { useCallback, useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Header } from "../components/Header/Header";
import Geolocation from "@react-native-community/geolocation";
import { SingleLineInput } from "../components/SingleLineInput";
import { getAddressFromCoords, getCoordsFromAddress, getCoordsFromKeyword } from "../utils/GeoUtils";

export const MainScreen: React.FC = () => {
    // 37.5453577 126.9525465
    const [query, setQuery] = useState<string>('');
    const [currentAddress, setCurrentAddress] = useState<string | null>(null);
    const [currentRegion, setCurrentRegion] = useState<{
        latitude: number;
        longitude: number;
    }>({
        latitude: 126.9525465,
        longitude: 37.5453577,
    });

    const getMyLocation = useCallback(async()=>{
        Geolocation.getCurrentPosition((position)=>{
            setCurrentRegion({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });

            getAddressFromCoords(position.coords.latitude, position.coords.longitude).then(setCurrentAddress);
        });
    }, []);

    const onFindAdress = useCallback<()=>Promise<void>>(async()=>{
        const keywordResult = await getCoordsFromKeyword(query);

        if (keywordResult !== null) {

            setCurrentAddress(keywordResult.address);
            setCurrentRegion({
            latitude: parseFloat(keywordResult.latitude.toString()),
            longitude: parseFloat(keywordResult.longitude.toString()),
        })

            return;
        }
        
        const addressResult = await getCoordsFromAddress(query);
        if (addressResult === null) {
            console.error('주소값을 찾지 못함');
            return;
        }

        setCurrentAddress(addressResult.address);
        setCurrentRegion({
            latitude: parseFloat(addressResult.latitude.toString()),
            longitude: parseFloat(addressResult.longitude.toString()),
        })
    }, [query])

    // const onPressBottomAddress = useCallback(() => {
    //     if (currentAddress === null) {
    //       return;
    //     }
    //     navigation.push('Add', {
    //       latitude: currontRegion.latitude,
    //       longitude: currontRegion.longitude,
    //       address: currentAddress,
    //     });
    //   }, [
    //     currentAddress,
    //     currontRegion.latitude,
    //     currontRegion.longitude,
    //     navigation,
    //   ]);

    useEffect(()=>{
        getMyLocation();
    }, [getMyLocation]);

    return (
        <View style={{flex:1}}>
            {/* <Header>
                <Header.Title title="MAIN" />
            </Header> */}
            <MapView
              style={{flex:1}}
              region={{
                latitude: currentRegion.latitude,
                longitude: currentRegion.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
                <Marker coordinate={{
                    latitude: currentRegion.latitude,
                    longitude: currentRegion.longitude,
                }}
                />
            </MapView>

            {currentAddress !== null && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{backgroundColor:'gray', paddingHorizontal:24, paddingVertical:12, borderRadius:30}}>
                <Text style={{fontSize: 16, color: 'white'}}>{currentAddress}</Text>
            </View>
        </View>
      )}

            <View style={{position:'absolute', top:24, left:24, right:24,}}>
                <View style={{backgroundColor:'white'}}>
                    <SingleLineInput 
                        value={query}
                        placeholder="주소를 입력해 주세요 ~제발"
                        onChangeText={setQuery}
                        onSubmitEditing={onFindAdress}
                    />    
                </View>

            </View>
        </View>
    )
};