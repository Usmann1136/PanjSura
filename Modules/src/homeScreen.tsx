import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppFonts } from "../Utils/fonts";
import GoldenBlock from "./components/goldenblock";

export default function HomeScreen(props: any) {

    return (


        <LinearGradient colors={['#8E2DE2', '#4A00E0', '#1E00E0', '#0000E0', '#0000E0']}

            locations={[0, 0.25, 0.5, 0.75, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.view1}>


            <ScrollView>
                <Text style={style.textstyle}>أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</Text>
                <Text style={style.textstyle}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
                <View style={{ height: 20 }} />
                <Text style={style.appName2}>بنج سورۃ</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={style.appName2} >سورة الواقعة</Text>
                    <Text style={style.appName2} >سورة الملك</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={style.appName2} >سورة يس</Text>
                    <Text style={style.appName2} >سورة الإخلاص</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 20 }}>
                    <Text style={style.appName2} >سورة الفاتحة</Text>
                </View>
                <View style={{ height: 20 }} />

                <GoldenBlock onPress={() => props.navigation.navigate('Detail')} name={"Al-Waqi'ah"} number={"56"} verses={"96"} revelation={"Meccan"}



                />


                <GoldenBlock onPress={() => props.navigation.navigate('Detail2')} name={"Al-Mulk"} number={"67"} verses={"30"} revelation={"Meccan"} />


                <GoldenBlock onPress={() => props.navigation.navigate('Detail3')} name={"Ya-Sin"} number={"36"} verses={"93"} revelation={"Meccan"} />


                <GoldenBlock onPress={() => props.navigation.navigate('Detail4')} name={"Al-Ikhlas"} number={"112"} verses={"94"} revelation={"Meccan"} />


                <GoldenBlock onPress={() => props.navigation.navigate('Detail5')} name={"Al-Fatiha"} number={"1"} verses={"7"} revelation={"Meccan"} />


                <View style={{ height: 20 }} />

            </ScrollView>
        </LinearGradient>
    );

}


const style = StyleSheet.create({
    view1: {
        flex: 1,




    },
    textstyle: {
        marginTop: 50,
        color: 'white',
        textAlign: 'center',
        fontFamily: AppFonts.notosansblack,
        fontSize: 26
    },

    appName: {
        color: 'white',
        fontFamily: AppFonts.notosansblack,
        fontWeight: '500',
        marginHorizontal: 20,
        marginTop: 50,
        fontSize: 20,
        textAlign: 'center'
    },
    appName2: {
        color: 'white',
        fontFamily: AppFonts.notosansblack,
        fontWeight: '300',
        marginHorizontal: 20,
        fontSize: 20,
        textAlign: 'center'
    },


})
