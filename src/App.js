import './App.css';
import { useEffect, useState } from "react";
import HeaderIcons from './components/HeaderIcons';
import React, { Suspense } from 'react';
const UserCard=React.lazy(()=>import("./components/UserCard.js"));


function App() {
  const [response, setResponse] = useState([]);
  const [type, setType] = useState("list");
  const [ascending, setAscending] = useState(true);
  const url= `https://randomuser.me/api/?results=20`;
  

  useEffect(() => {
      fetch(url).then(res => {
          if(res.ok){
            return res.json();
          }
          throw res; 
          
        }).then(data=>{
          data.results.sort((a, b) => ((a.name.first+" "+a.name.last) > (b.name.first+" "+b.name.last)) ? 1 : -1);
      setResponse(data.results);
      data.results.map(()=>{
        
      })
      console.log(data.results);
      }).catch(error=>{
      console.error("error");
    })  
   
  }, []);
  function handleChange(newValue) {

    setType(newValue);
  }
  function sortName(value) {
    if(value){
      response.sort((a, b) => ((a.name.first+" "+a.name.last) > (b.name.first+" "+b.name.last)) ? 1 : -1);
    }
    else{
      response.sort((a, b) => ((a.name.first+" "+a.name.last) > (b.name.first+" "+b.name.last)) ? -1 : 1);

    }
    setAscending(value);
    setResponse(response);
  }
  return (
    <div className="App">
      <h1 className="app-header">Meet the Team</h1>
      <HeaderIcons type={type} onChange={handleChange} onSort={sortName} ascending={ascending}/>
      <div className={(type==="list")?"gridview card-container":"listview card-container"}>
      {response.map((user)=>{
        return (
          
          <Suspense fallback={<div>Loading</div>}>
            <UserCard key={user.login.uuid} city={user.location.city} name={user.name} picture={user.picture}  />
          </Suspense>
          
        );
        
      })}

      </div>

    </div>
  );
}

export default App;
