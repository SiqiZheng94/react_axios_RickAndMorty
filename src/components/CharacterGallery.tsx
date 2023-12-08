import {Character} from "../App.tsx";
import CharacterCard from "./CharacterCard.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

type CharacterGalleryProps = {
    characters: Character[]
    previous: ()=>void
    next: ()=>void
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <>
        <div>
            <h2>
                ---Gallery---
            </h2>
            <button onClick={props.previous}>Previous Page</button><button onClick={props.next}>Next Page</button>
            {props.characters.map(character => <CharacterCard
                                                                key={character.id}
                                                                character={character}/>)}
        </div>
        </>
    )
}
