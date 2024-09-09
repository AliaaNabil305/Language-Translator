import { createContext, useState } from "react";
import axios from 'axios';

const TranslatorContext=createContext({})
export function TranslatorProvider(props){
    let[inputLanguage,setInputLanguage]=useState('en')
    let[outputLanguage,setOutputLanguage]=useState('ar')
    let[translateText, setTranslateText]=useState('Translation')
    let[inputText,setInputText]=useState('')
    
    function handleReverseLanguages(){
        setInputLanguage(outputLanguage);
        setOutputLanguage(inputLanguage);
        setInputText('')
        setTranslateText('Translation')
    }

    function handleRemoveText(){
        setInputText('')
        setTranslateText('Translation')
    }
    
    async function handleTranslate(){
        if (!inputText || !inputLanguage || !outputLanguage) return;
        
        
        const url = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&profanityAction=NoAction&textType=plain&to=${outputLanguage}`;

        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '9b3ff91deamsh5fab11fae91c75cp19fd26jsnf0453dfcbdf0',
                'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([
                {
                    Text: inputText  // Replace with dynamic text input
                }
            ])
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();  // Parse the JSON response
            const translation = result[0].translations[0].text;
            setTranslateText(translation)
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        
        
    }
    
    return(
        <TranslatorContext.Provider value={{inputLanguage,inputText,translateText,outputLanguage,handleTranslate,handleRemoveText,handleReverseLanguages,setInputLanguage,setInputText,setOutputLanguage,setTranslateText}}>
            {props.children}
        </TranslatorContext.Provider>
    )
}
export default TranslatorContext;