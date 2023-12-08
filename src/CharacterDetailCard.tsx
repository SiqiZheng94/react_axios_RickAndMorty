import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Character, charactersResponse} from "./characters.ts";

export default function CharacterDetailCard() {

    let pathId = useParams().id

    const [error, setError] = useState<string>("")

    const [selectedCharacter, setSelectedCharacter] = useState<Character|null>(null)

    const characterData:Character|undefined = charactersResponse.results.find(
        (character) => character.id.toString() === pathId
    );

    useEffect(() => {
        if (characterData) {
            // renderCharacterDetails(characterData);
            setSelectedCharacter(characterData)
        } else {
            setError("NOT FOUND!")
        }
    }, [pathId]);

    // function renderCharacterDetails(character:Character) {
    //     return (
    //         <>
    //             <p>{character.name}</p>
    //         </>
    //     );
    // }

    // function renderNotFound() {
    //     return <p>NOT FOUND!</p>;
    // }


    return (
        <div>
            {/*{renderCharacterDetails(characterData)}*/}
            <p>{selectedCharacter?.name}</p>
            <p>{selectedCharacter?.id}</p>
            <p>{selectedCharacter?.type}</p>
            <p>{selectedCharacter?.species}</p>
            <p>{selectedCharacter?.status}</p>
            {error}
        </div>
    );
}
