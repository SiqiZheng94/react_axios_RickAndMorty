import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./characters.ts";
type AddNewCharacterProps={
    addNewCharacter:(newCharacter:Character)=>void
}

export default function AddNewCharacter(props:AddNewCharacterProps){

    const [inputName, setInputName] = useState<string>("")
    function nameOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputName(event.target.value)
    }
    const [inputSpecies, setInputSpecies] = useState<string>("")
    function speciesOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputSpecies(event.target.value)
    }
    const [inputImageURL, setInputImageURL] = useState<string>("")
    function imageOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputImageURL(event.target.value)
    }


    function submitNewCharacter(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        const newCharacter = {name:inputName,status:"",id:0,species:inputSpecies,type:"",image:inputImageURL}
        alert("Successful!")
        props.addNewCharacter(newCharacter)
        setInputName("")
        setInputSpecies("")
        setInputImageURL("")

    }

    return(
        <>
            <form onSubmit={submitNewCharacter}>
                <h2>Add a New Character Here</h2>
                <div>name: <input type={"text"}
                        placeholder={"character name"}
                        value={inputName}
                        onChange={nameOnChange}
                /></div>
                <div>species: <input type={"text"}
                                  placeholder={"character species"}
                                  value={inputSpecies}
                                  onChange={speciesOnChange}
                /></div>
                <div>image url: <input type={"text"}
                                     placeholder={"character image url"}
                                     value={inputImageURL}
                                     onChange={imageOnChange}
                /></div>

                <div><button>Creat</button></div>

            </form>

        </>
    )
}