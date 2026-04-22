import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
    const [username, setUsername] = useState("");
    const router = useRouter();
    return(
        <View style={styles.log}>
            <ThemedView>
                <Image source={require("../assets/images/IMG-20250321-WA0013.jpg")} style={{height: 170, width: "100%"}} />
            </ThemedView>
            <Text style={styles.text}>Login Page</Text>
            <TextInput style={{borderBottomWidth: 1,
                               borderBottomColor: 'blue',
                               paddingVertical: 5,
                               marginBottom: 3,
                               fontSize: 16}}
                               placeholder="Enter Username" 
                               value={username} 
                               onChangeText={setUsername}/>
            <View style={styles.btn}>
            <Button title="Login" onPress={() => router.push({pathname: "/(tabs)", params: {username}})}></Button>
            </View>    
        </View>
    )
}
const styles = StyleSheet.create({
    log: {
        backgroundColor: "white",
        height: "100%",
        padding: 10
    },

    text: {
        fontSize: 35,
        fontWeight: "bold",
        fontFamily: "Bernard MT Condensed",
        padding: 20,
        textAlign: "center"
    },

    btn: {
        marginTop: 20,
    }
})