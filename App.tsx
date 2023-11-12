import { View } from "react-native";
import SplashScreen from "./Modules/src/splashscreen";
import AppNavigator from "./Modules/res/navigation";
import { useEffect } from "react";

export default function App(
  
) {
 
  return (

    <View style={{flex:1}}>
      <AppNavigator/>
    </View>
    
    );
}


