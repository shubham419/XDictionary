import React, { useRef, useState } from "react";

const Dictionary = () => {
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const inputRef = useRef();

  const [meaning, setMeaning] = useState("");

  function searchHandler() {
    const word = inputRef.current.value;
    console.log(word);
    if(word){
        let flag = false;
        for(let i = 0; i < dictionary.length; i++){
            if(dictionary[i].word.toLowerCase() == word.toLowerCase()){
                flag = true;
                setMeaning(dictionary[i].meaning);
                break;
            }
        }
        if(!flag){
            setMeaning("Word not found in the dictionary.");
        }
    }else{
        setMeaning("");
    }

  }


  return <div>
    <h1>Dictionary App</h1>
    <input ref={inputRef} placeholder="Searchfor word..." type="text" />
    <button onClick={searchHandler}>Search</button>
    <p><strong>Definition:</strong></p>    
    {meaning && <p>{meaning}</p>}
  </div>;
};

export default Dictionary;
