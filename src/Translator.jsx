import React, { useContext } from 'react';
import TranslatorContext from './Context/Store';
import languageList from './language.json';
import reverse from './reverse.svg';
import remove from './delete.svg'

export default function Translator() {
    let {inputLanguage,inputText,translateText,outputLanguage,handleTranslate,handleRemoveText,handleReverseLanguages,
        setInputLanguage,setInputText,setOutputLanguage,setTranslateText} = useContext(TranslatorContext);

    return (
        <>
        <div className="section d-flex align-items-center justify-content-center vh-100">
            <div className="container align-items-center justify-content-center w-50">

                <div className="row d-flex align-items-center text-center">

                    <div className="col-5 col-md-5   pe-2 ">
                        <select className="form-select mb-3 w-100" value={inputLanguage} onChange={(e) => setInputLanguage(e.target.value)}>
                            {Object.keys(languageList).map((lang, idx) => {
                                const language = languageList[lang];
                                return (
                                    <option key={idx} value={lang}>{language.name}</option>
                                );
                            })}
                            
                        </select>
                    </div>
                    

                    <div className="col-1 col-1 col-md-1  ">
                        <img src={reverse} onClick={handleReverseLanguages} className='reverseIcon' alt="Reverse Languages" />
                    </div>

                    <div className="col-5 col-5 col-md-5  ">
                        <select className="form-select mb-3" value={outputLanguage} onChange={(e) => setOutputLanguage(e.target.value)}>
                            {Object.keys(languageList).map((lang, idx) => {
                                const language = languageList[lang];
                                return (
                                    <option key={idx + 118} value={lang}>{language.name}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>

                <div className="row">

                    <div className=" col-5  col-md-5  text-area">
                        <textarea className='w-100 border border-2 rounded p-2' type="text"
                            value={inputText}
                            placeholder='Enter Text'
                            onChange={(e) => setInputText(e.target.value)}
                            style={{ height: '150px', resize: 'none' }} />
                            <img src={remove} onClick={handleRemoveText} style={{width:'18px',display: (inputText.length) ? "block" : "none"}} className='removeIcon' />
                    </div>
                    
                    <div className="col-1 col-md-1 ">

                    </div>
                    
                    <div className="col-5  col-md-5  outputText">
                        <div className="w-100 border border-2 rounded p-2 bg-light translationOutput" style={{ height: '150px', overflowY: 'auto' }}>
                            {translateText || "Translation"}
                        </div>
                    </div>
                </div>


                <div className="row ">
                    <div className="col-11 col-md-11   text-center">
                        <button className="btn btn-primary w-100 py-2" onClick={handleTranslate}>Translate</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
