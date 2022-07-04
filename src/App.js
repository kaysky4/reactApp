import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './images/search.png'
import TeamCard from './Components/TeamCard';
import React from 'react';
import TeamData from './TeamData.json';

//const API_URL = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=United_States';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchTeams = async (strTeam) => {
    // const response = await fetch(`${TeamData}&s=${strTeam}`);
    // const data = await response.json();

    const data = TeamData.map((val, key) => {
      return teams.strTeam;
    })
    setTeams(data.Search);
    console.log(data.Search);
  }

  useEffect(() => {
    searchTeams('Austin FC');
  },[]);


  return (
    <div className="app">
      <h1>MLS Teams</h1>


      <div className='search'>
        <input 
          placeholder='Search for teams'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <img 
        src={SearchIcon}
        alt="search"
        onClick={() => searchTeams(searchTerm)}/>
      </div>

      {/* <div>
        <button className='all-button'>View All Teams</button>
      </div> */}

      <div className='container'>
        {TeamData.filter((val)=> {
          if (searchTerm == "") {
            return val
          } else if (val.strTeam.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return <TeamCard team={val}/>
        })}
      </div>
      {/* {teams?.length > 0 
        ? (
          <div className='container'>
            {TeamData.map((team, key) => (
              <TeamCard team={team.strTeam}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No teams found</h2>
          </div>
        )
      } */}
    </div>
  );
}

export default App;