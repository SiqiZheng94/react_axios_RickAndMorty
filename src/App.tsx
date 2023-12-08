import './App.css'
import React, {useEffect, useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Link, Navigate, Route, Routes, useParams} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import Navigation from "./Navigation.tsx";
import CharacterCard from "./CharacterCard.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    const exampleCharacter:Character={
        id: 0,
        name: "",
        status: "",
        species: "",
        type: ""
    }
    const [character, setCharacter] = useState<Character>(exampleCharacter)




    return (
        <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/characters" element={<CharacterGallery characters={characters}/>}/>
            <Route path="/characters/:id" element={<CharacterDetailCard/>}/>
        </Routes>
        </>
    )
}

export default App
