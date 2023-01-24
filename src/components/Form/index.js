import React, { useState } from "react"
import { View, Text, TextInput, Button} from "react-native"
import ResultImc from "../ResultImc";
export default function Form() {

const[height, setHeight] = useState(null)
const[weight, setWeight] = useState(null)
const[messageImc, setMessageImc] = useState("Preencha o peso e altura")
const[imc, setImc] = useState(null)
const[textButton, setTextButton] = useState(null)

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}
function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Your Imc is equal to")
        setTextButton("Calculate again")
        return
    }
    setImc(null)
    setTextButton("Calculate")
    setMessageImc("Fill weight and heigh")
}
    return(
        <View>
            <View>
                <Text>Hight</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                />

                <Text>Weight</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 70.25"
                keyboardType="numeric"
                />
                <Button
                onPress={() => validationImc()}
                title="Calculate IMC"
                />
            </View>
            
            <ResultImc
            messageResultImc={messageImc}
            resultImc = {imc}
            />
        </View>
    );
}