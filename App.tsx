// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MemberScreen from './src/screens/MemberScreen';
import LoginScreen from './src/screens/LoginScreen';
import TopicScreen from './src/screens/TopicScreen';
import {Header} from './src/components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: () => <Header />, // 커스텀 Header 컴포넌트 설정
              headerTransparent: false, // 헤더 투명 설정 비활성화
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Topic" component={TopicScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Member" component={MemberScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
