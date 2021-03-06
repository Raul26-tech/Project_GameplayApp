import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const style = StyleSheet.create({
    Container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.backgroundColor
    },
    image: {
        height: 360,
        width: '100%',  
    },
    content:{
        marginTop: -40,
        padding: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
});