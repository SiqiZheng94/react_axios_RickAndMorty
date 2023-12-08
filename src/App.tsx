import './App.css'
import React, {useEffect, useState} from "react";
import CharacterGallery from "./components/CharacterGallery.tsx";
import {Link, Navigate, Route, Routes, useParams} from "react-router-dom";
import Welcome from "./components/Welcome.tsx";
import Navigation from "./components/Navigation.tsx";
import CharacterCard from "./components/CharacterCard.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import AddNewCharacter from "./components/addNewCharacter.tsx";
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
        pageId < 42 ? setPageId(pageId+1) : alert("This is the last page!")
    }
    function previousPage(){
        pageId > 1 ? setPageId(pageId-1) : alert("This is the first page!")
        }

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
