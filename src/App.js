import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./images/search.png";
import TeamCard from "./Components/TeamCard";
import TeamData from "./TeamData.json";

//const API_URL = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=United_States';

const App = () => {
  const [teams, setTeams] = useState([TeamData]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchTeams = async (strTeam) => {
    // const response = await fetch(`${TeamData}&s=${strTeam}`);
    // const data = await response.json();

    const data = TeamData.map((val, key) => {
      return teams.strTeam;
    });
    setTeams(data.Search);
    console.log(data.Search);
  };

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="app">
      <h1>American Soccer Teams</h1>

      <div className="search">
        <input
          data-testid="searchFilter"
          placeholder="Search for teams"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchTeams(searchTerm)}
        />
      </div>

      <div className="container">
        <div id="carouselShell" className="carousel-outside">
          <div className="carousel-btn" data-testid="leftCarouselBtn" onClick={slideLeft}>
            ❰
          </div>
          <div id="slider" className="carousel-inside">
            {TeamData.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.strTeam.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val, key) => {
              return <TeamCard team={val} />;
            })}
          </div>

          <div className="carousel-btn" data-testid="rightCarouselBtn" onClick={slideRight}>
            ❱
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
