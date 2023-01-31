import React from "react"
import { View, Text, TouchableOpacity, Share} from "react-native"
import styles from "./style";
export default function ResultImc(props) {
    const onShare = async () => { 
        const result = await Share.share({
            message: "My BMI is: " + props.resultImc,
        })
    } 
    return(
        <View style={styles.resultImc}>
            <View style={styles.boxShareButon}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
                {props.resultImc != null ?
                <TouchableOpacity 
                    onPress={onShare}
                    style={styles.shared}>
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
                : 
                <View/>
                }
            </View>
        </View>
    );
}