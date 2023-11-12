import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import SplashScreen from "../src/splashscreen";
import HomeScreen from "../src/homeScreen";
import DetailScreen from "../src/detailScreen";
import DetailScreen2 from "../src/detailScreen2";
import DetailScreen3 from "../src/detailScreen3";
import DetailScreen4 from "../src/detailScreen4";
import DetailScreen5 from "../src/detailScreen5";
export default function AppNavigator (){
    const Stack = createNativeStackNavigator();
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
            <Stack.Screen name="Detail2" component={DetailScreen2}></Stack.Screen>
            <Stack.Screen name="Detail3" component={DetailScreen3}></Stack.Screen>
            <Stack.Screen name="Detail4" component={DetailScreen4}></Stack.Screen>
            <Stack.Screen name="Detail5" component={DetailScreen5}></Stack.Screen>
        </Stack.Navigator>
       </NavigationContainer> 
    );
}