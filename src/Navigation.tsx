import {Link} from "react-router-dom";

export default function Navigation(){
    return (
        <>
            <Link to={"/"}>Home</Link>
            <span> </span>
            <Link to="/characters">Characters</Link>
            <span> </span>
            <Link to={"/addnewcharacter"}>Admin</Link>
        </>
    )
}