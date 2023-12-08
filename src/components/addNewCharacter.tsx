import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "../App.tsx";
type AddNewCharacterProps={
    addNewCharacter:(newCharacter:Character)=>void
}

export default function AddNewCharacter(props:AddNewCharacterProps){

    const [inputName, setInputName] = useState<string>("")
    function nameOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputName(event.target.value)
    }
    const [inputStatus, setInputStatus] = useState<string>("")
    function statusOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputStatus(event.target.value)
    }
    const [inputType, setInputType] = useState<string>("")
    function typeOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputType(event.target.value)
    }
    const [inputSpecies, setInputSpecies] = useState<string>("")
    function speciesOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputSpecies(event.target.value)
    }
    const [inputImageURL, setInputImageURL] = useState<string>("")
    function imageOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputImageURL(event.target.value)
    }
    const [inputId, setInputId] = useState<number>(0)
    function idOnChange(event:ChangeEvent<HTMLInputElement>){
        setInputId(Number(event.target.value))
    }


    function submitNewCharacter(event:FormEvent<HTMLFormElement>){
        // form submission doesn't trigger the default behavior, then handle it as needed
        event.preventDefault()
        const newCharacter = {
            name:inputName,
            status:inputStatus,
            id:inputId,
            species:inputSpecies,
            type:inputType,
            image:inputImageURL
        }
        alert("Successful!")
        props.addNewCharacter(newCharacter)
        setInputName("")
        setInputSpecies("")
        setInputImageURL("")
        setInputId(0)
        setInputStatus("")
        setInputType("")
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
                <div>status: <input type={"text"}
                                     placeholder={"character status"}
                                     value={inputStatus}
                                     onChange={statusOnChange}
                /></div>
                <div>type: <input type={"text"}
                                    placeholder={"character type"}
                                    value={inputType}
                                    onChange={typeOnChange}
                /></div>
                <div>id: <input type={"number"}
                                     value={inputId}
                                     onChange={idOnChange}
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
