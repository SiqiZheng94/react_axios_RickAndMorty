import {Character} from "./App.tsx";
import {Link, useNavigate} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    // return (
    //     <Link to = {`/characters/${props.character.id}`}>
    //         <div>
    //             <p>{props.character.name}</p>
    //             <p>{props.character.species}</p>
    //         </div>
    //     </Link>
    // )

    //use the useNavigate hook to trigger navigation at a certain point
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (props.character) {
            navigate(`/characters/${props.character.id}`);
        }
    };
    return (
        <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <p>{props.character?.name}-{props.character?.species}</p>
        </div>
    );
}