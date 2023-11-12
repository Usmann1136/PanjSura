import { Pressable, StyleSheet, Text, View } from "react-native";
import { AppFonts } from "../../Utils/fonts";

interface ButtonProps {
    onPress: any;
    name: string,
    number: string,
    verses: string,
    revelation: string,


}
export default function GoldenBlock({ onPress, name, number, verses, revelation }: ButtonProps, props: any) {
    return (
        <Pressable onPress={onPress}>
            <View style={style.tilesheet}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.surahTitle}>Surah Title:</Text>
                        <Text style={style.surahName}>{name}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.surahTitle}>Surah No:</Text>
                        <Text style={style.surahName}>{number}</Text>

                    </View>
                    <View style={{ height: 20 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={style.surahTitle}>Relevation:</Text>
                        <Text style={style.surahName}>{revelation}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', paddingRight: 20, }}>

                        <Text style={style.surahTitle}>No. of Verses:</Text>
                        <Text style={style.surahName}>{verses}</Text>

                    </View>
                </View>

            </View>

        </Pressable>
    );
}

const style = StyleSheet.create({
    tilesheet: {

        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 20,
        backgroundColor: '#3498db',
        marginVertical: 20,
        borderRadius: 20,
        elevation:2,
        opacity: 0.8,
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    surahTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300',
        fontFamily: AppFonts.notosansblack
    },

    surahName: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        fontFamily: AppFonts.notosansblack
    }

})