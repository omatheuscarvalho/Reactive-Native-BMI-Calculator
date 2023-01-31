import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    formContent:{
        width: "100%", 
        height: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 30,
        paddingTop: 30,
    },
    form:{
        width: "100%",
    },
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    imput:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    ButtonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",

    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionBMI:{
        width: "80%",
        height: "50%",
    },
    listBmi:{
        marginTop: 20,
        paddingBottom: 50,
    },
    resultImcItem:{
        fontSize: 18,
        color: "red",
        height: 50,
        width: "1008%",
        paddingRight: 20,
        fontWeight: "bold",
    },
    textResultItemList:{
        fontSize: 14,
        fontWeight: "normal"
    }
})

export default styles