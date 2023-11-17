import React, { useCallback, useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Header } from "../components/Header/Header";
import Geolocation from "@react-native-community/geolocation";
import { SingleLineInput } from "../components/SingleLineInput";
import { getAddressFromCoords, getAddressFromCategory, getCoordsFromAddress, getCoordsFromKeyword } from "../utils/GeoUtils";
import { useRootNavigation } from "../navigation/RootNavigation";
import { getRestrauntList } from "../utils/RealTimeDataBaseUtils";

export const MainScreen: React.FC = () => {
    // 37.5453577 126.9525465
    const navigation = useRootNavigation<'Main'>();

    const [isMapReady, setIsMapReady] = useState<boolean>(false);
    const [markerList, setMarketList] = useState<
    {latitude: number; longitude: number; title: string; address: string}[]
  >([]);

    const [query, setQuery] = useState<string>('');
    const [category, setCategory] = useState(' '); // 아 이게 버튼 누르면 state가 다시 초기화 되나..?

        useEffect(() => {
            if (query == '카페') {
              setCategory('CE7'.toString());
              console.log(category);
            } else if (query == '음식점') {
              setCategory('FD6'.toString());
            }
          }, [query]);

    const [currentAddress, setCurrentAddress] = useState<string | null>(null);
    const [currentRegion, setCurrentRegion] = useState<{
        latitude: number;
        longitude: number;
    }>({
        latitude: 126.9525465,
        longitude: 37.5453577,
    });

    const onChangeLocation = useCallback<
    (item: {latitude: number; longitude: number}) => Promise<void>
  >(async item => {
    setCurrentRegion({
      latitude: item.latitude,
      longitude: item.longitude,
    });

    getAddressFromCoords(item.latitude, item.longitude).then(setCurrentAddress);
  }, []);

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

        console.log(category);
        const categoryResult = await getAddressFromCategory(category);

        if (categoryResult !== null) {
            setCurrentAddress(categoryResult.address);
            console.log(categoryResult.addressName);
        }

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

    const onPressBottomAddress = useCallback(() => {
        console.log("눌러지니?");
        if (currentAddress === null) {
          return;
        }

        navigation.push('Add', {
          latitude: currentRegion.latitude,
          longitude: currentRegion.longitude,
          address: currentAddress,
        });
      }, [
        currentAddress,
        currentRegion.latitude,
        currentRegion.longitude,
        navigation,
      ]);

      const onMapReady = useCallback(async () => {
        setIsMapReady(true);
        const restrauntList = await getRestrauntList();
        setMarketList(restrauntList);
      }, []);

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
              onMapReady={onMapReady}
              onLongPress={event => {
                onChangeLocation(event.nativeEvent.coordinate);
              }}
            >
                {isMapReady && (
                    <Marker
                        coordinate={{
                        latitude: currentRegion.latitude,
                        longitude: currentRegion.longitude,
                        }}
                    />
                    )}
                {isMapReady &&
          markerList.map(item => {
            return (
              <Marker
                title={item.title}
                description={item.address}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                pinColor="blue"
                onCalloutPress={() => {
                  navigation.push('Detail', {
                    latitude: item.latitude,
                    longitude: item.longitude,
                    address: item.address,
                    title: item.title,
                  });
                }}
              />
            );
          })}
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
                    <Pressable
                        onPress={onPressBottomAddress}
                        style={{
                        backgroundColor: 'gray',
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                        borderRadius: 30,
                        }}>
                        <Text style={{fontSize: 16, color: 'white'}}>{currentAddress}</Text>
                    </Pressable>
                </View>
            )}

            <View style={{position:'absolute', top:24, left:24, right:24,}}>
                <View style={{backgroundColor:'white'}}>
                    <SingleLineInput 
                        value={query}
                        placeholder="주소를 입력해 주세요 ~"
                        onChangeText={setQuery}
                        onSubmitEditing={onFindAdress}
                    />    
                </View>

            </View>
        </View>
    )
};