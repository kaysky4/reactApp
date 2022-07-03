import React from "react"

const TeamCard = ({ team}) => {
    return (
        <div className='team'>
            <div>
                <p>Est: {team.intFormedYear}</p>
            </div>

            <div>
                <img src={team.strTeamJersey !== null ? 
                team.strTeamJersey : 'https://via.placeholder.com/400'} 
                alt={team.strJersey}/>
            </div>

            <div>
                <h3>{team.strTeam}</h3>
                <img className="badge" src={team.strTeamBadge} alt={team.strTeamBadge} width="40%"/>
                <span> {team.strLeague}<br /></span>
                <br />
                <span> {team.strStadiumLocation}<br /></span>
                <br />
                <span> {team.strWebsite}</span>
            </div>
        </div>
    )

}

export default TeamCard;