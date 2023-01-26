import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultImc from "../ResultImc";
import styles from './style'

export default function Form() {

const[height, setHeight] = useState(null)
const[weight, setWeight] = useState(null)
const[messageImc, setMessageImc] = useState("fill high and weight")
const[imc, setImc] = useState(null)
const[textButton, setTextButton] = useState("Calculate")
const[errorMessageHeigh, setErrorMessageHeigh] = useState(null)
const[errorMessageWeight, setErrorMessageWeight] = useState(null)

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}
function verifyImcIsNull(){
    if(height == null){
        setErrorMessageHeigh("Required field!")
    }else{
        setErrorMessageHeigh(null)
    }
    if(weight == null){
        setErrorMessageWeight("Required field!")
    }else{
        setErrorMessageWeight(null)
    }
}
function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Your Imc is equal to")
        setTextButton("Calculate again")
        setErrorMessageWeight(null)
        setErrorMessageHeigh(null)
        return
    }
    verifyImcIsNull()
    setImc(null)
    setTextButton("Calculate")
    setMessageImc("Fill weight and heigh")
}
    return(
        <View style={styles.formContent}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Hight</Text>
                <Text style={styles.errorMessage}>{errorMessageHeigh}</Text>
                <TextInput
                style={styles.imput}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Weight</Text>
                <Text style={styles.errorMessage}>{errorMessageWeight}</Text>
                <TextInput
                style={styles.imput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 70.25"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={()=>{
                    validationImc()
                }}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            
            <ResultImc
            messageResultImc={messageImc}
            resultImc = {imc}
            />
        </View>
    );
}