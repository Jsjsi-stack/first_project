import { ThemedView } from "@/components/themed-view";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function Details() {
    const router = useRouter()
    const {id} = useLocalSearchParams()
    const [colour, setColour] = useState(false);
    return(
        <ThemedView style={sss.tstyle}>
            <Text style={sss.txt}>Item id: {id}</Text>
            <Pressable onPress={() => router.back()} style={sss.press}>
                <AntDesign name="close" size={20} color={colour? "red" : "black"} />
                <Text>Close</Text>
            </Pressable>
            <Pressable onPress={() => setColour(!colour)} style={{margin: 20}}>
                <AntDesign name="heart" size={40} color={colour? 'red' : 'black'}/>
            </Pressable>
        </ThemedView>
    );
}
const sss = StyleSheet.create({
    tstyle: {
        backgroundColor: "white",
        height: "100%",
        marginTop: 30,
        padding: 20,
        alignItems: "center", 
    },
    txt: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 20,
        color: "blue"
    },
    press: {
        borderColor: "blue",
        borderWidth: 1,
        backgroundColor: "aqua",
        alignItems: "center",
        height: 50,
        width: 80,
        justifyContent: "space-evenly",
        borderRadius: 30,
        color: "red"
    }})