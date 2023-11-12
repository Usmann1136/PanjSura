
import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View, Animated, Easing } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AppFonts } from "../Utils/fonts";
export default function SplashScreen(props: any) {
    const circularAnimation = new Animated.Value(0);

    React.useEffect(() => {
        Animated.timing(circularAnimation, {
            toValue: 1,
            duration: 2000, // Adjust the duration as needed
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    }, []);

    const circularScale = circularAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    useEffect(() => {
        // Simulate a delay before navigating to the main screen
        const timer = setTimeout(() => {
            props.navigation.navigate('Home');
        }, 2000); // 2000 milliseconds delay

        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, [props]);
    return (
        <LinearGradient colors={['#8E2DE2', '#4A00E0', '#1E00E0', '#0000E0', '#0000E0']}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.view}>
            <StatusBar hidden={true} />
            <Animated.View
                style={[
                    style.circularView1,
                    {
                        transform: [{ scale: circularScale }],
                    },
                ]}
            >
                <View style={style.circularView2}>
                    <Text style={style.appName}>بنج سورۃ</Text>
                </View>
            </Animated.View>
        </LinearGradient>
    );
}
const style = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circularView1: {
        width: '80%',
        height: '30%',
        aspectRatio: 1,
    
        borderRadius: 500,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    circularView2: {
        width: '80%',
        height: '30%',
        aspectRatio: 1,
        borderRadius: 500,
        flex: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    appName: {
        color: 'white',
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: 30,
        fontFamily: AppFonts.notosansblack
    },
})

