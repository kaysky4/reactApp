import React from "react"

const TeamCard = ({ team1}) => {
    return (
        <div className='team'>
            <div>
                <p>Est: {team1.intFormedYear}</p>
            </div>

            <div>
                <img src={team1.strTeamJersey !== null ? 
                team1.strTeamJersey : 'https://via.placeholder.com/400'} 
                alt={team1.strJersey}/>
            </div>

            <div>
                <h3>{team1.strTeam}</h3>
                <img className="badge" src={team1.strTeamBadge} alt={team1.strTeamBadge} width="40%"/>
                <span> {team1.strLeague}<br /></span>
                <br />
                <span> {team1.strStadiumLocation}<br /></span>
                <br />
                <span> {team1.strWebsite}</span>
            </div>
        </div>
    )

}

export default TeamCard;