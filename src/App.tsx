import './App.css'
import React, {useEffect, useState} from "react";
import CharacterGallery from "./CharacterGallery.tsx";
import {Link, Navigate, Route, Routes, useParams} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import Navigation from "./Navigation.tsx";
import CharacterCard from "./CharacterCard.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import AddNewCharacter from "./addNewCharacter.tsx";
import axios from "axios";


export type Character = {
    id: number
    name: string
    status: string
    species: string
    type: string
    image: string
}
function App() {

    const [characters, setCharacters] = useState<Character[]>([])


    function addNewCharacterInList(newCharacter:Character){
        setCharacters([...characters,newCharacter])
    }

    // const fetchData = ()=>{
    //     axios.get("https://rickandmortyapi.com/api/character")
    //         .then((response)=>setCharacters(response.data.results))
    //         .catch(error=>{
    //             console.error("Error information:",error)
    //         })
    // }
    //
    // useEffect(
    //     ()=>{fetchData()}, []
    // )



    const [pageId, setPageId] = useState<number>(1)
    const fetchData = ()=>{
        //axios.get(`https://rickandmortyapi.com/api/character/?page=${pageId}`)
        axios.get("https://rickandmortyapi.com/api/character/?page="+pageId)
            .then((response)=>setCharacters(response.data.results))
            .catch(error=>{
                console.error("Error information:",error)
            })
    }

    useEffect(
        ()=>{fetchData()}, [pageId]
    )
    function nextPage(){
        if (pageId<42){
            setPageId(pageId+1)
    }}
    function previousPage(){
        if (pageId > 1) {
            setPageId(pageId-1)
        }}

    return (
        <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/characters" element={<CharacterGallery characters={characters} previous={previousPage} next={nextPage}/>}/>
            <Route path="/characters/:id" element={<CharacterDetailCard charactersList={characters}/>}/>
            <Route path="/addnewcharacter" element={<AddNewCharacter addNewCharacter={addNewCharacterInList}/>}/>
        </Routes>
        </>
    )
}

export default App
