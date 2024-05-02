import { useEffect } from "react";
import { useState } from "react"
import User from "./user";
import "./style.css";

export default function GithubProfileFinder(){
    const [userName,setUserName]=useState('50me0ne');
    const [userData,setUserData]=useState(null);
    const [loading,setLoading]=useState(false);

    function HandleSummit(){
        fetchGithubUserData();
    }
    
    async function fetchGithubUserData(){
        setLoading(true);
        const rest=await fetch(`https://api.github.com/users/${userName}`);
        const data=await rest.json();
        if(data){
            setUserData(data);
            setLoading(false);
        }
    }

    function handleKeyDown(event){
        if(event.key==="Enter"){
            HandleSummit();
        }
    }

    useEffect(()=>{fetchGithubUserData();},[]);

    if(loading){
        return <h1>Loading Data! Please Wait</h1>
    }

    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input type="text" name="search-by-username" placeholder="Search Github Username" value={userName} onChange={(event)=>setUserName(event.target.value)} onKeyDown={(e)=>handleKeyDown(e)}/>
            <button onClick={HandleSummit}>Search</button>
        </div>
        {
            userData!==null?<User user={userData}/>:null
        }
    </div>
}