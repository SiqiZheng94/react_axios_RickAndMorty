import {Character} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";
import axios from "axios";

type CharacterGalleryProps = {
    characters: Character[]
}

// const fetchData = ()=>{
//     axios.get("https://rickandmortyapi.com/api/character")
//         .then((response)=>console.log(response.data.results)
//         )
// }

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div>
            {/*<button onClick={fetchData}>click</button>*/}
            <h2>
                ---Gallery---
            </h2>
            {props.characters.map(character => <CharacterCard
                                                                key={character.id}
                                                                character={character}/>)}
        </div>
    )
}
