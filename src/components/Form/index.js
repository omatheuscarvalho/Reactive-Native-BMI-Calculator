import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration,  Pressable, Keyboard,
        FlatList } from "react-native"
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
const[bmiList, setBmiList] = useState([])

function imcCalculator(){
    let heightFormat = height.replace(",", ".")
    let weightFormat = weight.replace(",", ".")
    let totalBmi = (weightFormat/(heightFormat*heightFormat)).toFixed(2)
    setBmiList ((arr) => [...arr, {id: new Date().getTime(), imc: totalBmi}])
    setImc(totalBmi)
}
function verifyImcIsNull(){
    if(height == null){
        setErrorMessageHeigh("Required field!")
        Vibration.vibrate();
    }else{
        setErrorMessageHeigh(null)
    }
    if(weight == null){
        setErrorMessageWeight("Required field!")
        Vibration.vibrate();
    }else{
        setErrorMessageWeight(null)
    }
}
function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Your BMI is equal to")
        setTextButton("Calculate again")
        setErrorMessageWeight(null)
        setErrorMessageHeigh(null)
        Keyboard.dismiss()
    }else{
        verifyImcIsNull()
        setImc(null)
        setTextButton("Calculate")
        setMessageImc("Fill weight and heigh")
    }
}
    return(
        <View style={styles.formContent}>
            {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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
            </Pressable>
            :
            <View style={styles.exhibitionBMI}>
                <ResultImc
                messageResultImc={messageImc}
                resultImc = {imc}
                />
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={()=>{
                    validationImc()
                }}>
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listBmi}
            data={bmiList.reverse()}
            renderItem={({item}) => {
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>BMI Result: </Text>
                        {item.imc} 
                    </Text>
                )
            }}
            keyExtractor={(item) => {
                item.id
            }}
            />
        </View>
    );
}