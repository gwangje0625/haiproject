import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecoilRoot} from 'recoil';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from './source/screen/home';
import Search from './source/screen/search';
import Schedulepage from './source/screen/Schedulepage'; // 시간표 컴포넌트 경로 수정
import Gps from './source/screen/gps';
import Notice from './source/screen/notice';
import Building09 from './source/screen/building09';
import Building56 from './source/screen/building56';

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;

const HeaderTitle = React.memo(({text}) => (
  <View style={style.titleContainer}>
    <Text numberOfLines={1} ellipsizeMode="tail" style={style.headerText}>
      {text}
    </Text>
  </View>
));
const HomePageHeader = React.memo(() => (
  <View style={style.titleContainer}>
    <Image
      style={style.headerImage}
      source={require('./source/image/symbol.jpg')}
    />
    <Text style={style.headerText}>HAI GPS</Text>
  </View>
));

const SchoolMapScreen = () => {
  return (
    <RecoilRoot>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Homepage"
            screenOptions={{
              headerStyle: {backgroundColor: '#ffffff', width: windowWidth},
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name="Homepage"
              component={Home}
              options={{
                headerTitleAlign: 'left',
                headerTitle: HomePageHeader,
              }}
            />
            <Stack.Screen
              name="Searchpage"
              component={Search}
              options={{
                headerTitle: () => <HeaderTitle text="검색" />,
              }}
            />
            <Stack.Screen
              name="Schedulepage"
              component={Schedulepage}
              options={{
                headerTitle: () => <HeaderTitle text="시간표" />,
              }}
            />
            <Stack.Screen
              name="Gpspage"
              component={Gps}
              options={{
                headerTitle: () => <HeaderTitle text="내비게이션" />,
              }}
            />
            <Stack.Screen
              name="Noticepage"
              component={Notice}
              options={{
                headerTitle: () => <HeaderTitle text="공지 사항" />,
              }}
            />
            <Stack.Screen
              name="College of Engineering"
              component={Building09}
              options={{
                headerTitle: () => <HeaderTitle text="공과대학" />,
              }}
            />
            <Stack.Screen
              name="56th Anniversary Memorial Hall"
              component={Building56}
              options={{
                headerTitle: () => <HeaderTitle text="56주년 기념관" />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
};

export default SchoolMapScreen;

const style = StyleSheet.create({
  titleContainer: {
    width: windowWidth * 0.7,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: windowWidth * 0.3,
    aspectRatio: 1,
    resizeMode: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 20,
  },
});
