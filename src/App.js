import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './images/search.png'
import TeamCard from './TeamCard';
import React from 'react';

const API_URL = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=United_States';

const team1 = {
  "idTeam": "140079",
  "strTeam": "Austin FC",
  "strAlternate": "Austin",
  "intFormedYear": "2021",
  "strSport": "Soccer",
  "strLeague": "American Major League Soccer",
  "strStadium": "Austin FC Stadium",
  "strStadiumThumb": "https://www.thesportsdb.com/images/media/team/stadium/pxox0z1622205823.jpg",
  "strStadiumDescription": "The Q2 Stadium is a soccer-specific stadium located in the North Burnet section of North Austin, Texas, United States. It is the home of Austin FC, a Major League Soccer (MLS) team that began play in 2021. The stadium hosted its first event on June 16, 2021, an international friendly between the United States women's national team and Nigeria.",
  "strStadiumLocation": "Austin, Texas",
  "strWebsite": "austinfc.com",
  "strFacebook": "www.facebook.com/austinfc",
  "strTwitter": "twitter.com/austinfc",
  "strInstagram": "www.instagram.com/austinfc",
  "strDescriptionEN": "Austin FC is an American professional soccer club based in Austin, Texas. The club competes in Major League Soccer (MLS) as a member of the Western Conference. Founded in 2018, the club began play in the 2021 season. Their home stadium is Q2 Stadium in north-central Austin. They are the first major professional sports league team to play in Texas' capital, which prior to 2021 was the largest city in the United States without such a team. \r\nAustin FC is the first top-division major professional sports team in the Austin area. The city's previous experience with professional soccer includes the Austin Aztex FC, which moved to Orlando in 2008 and eventually became MLS side Orlando City SC; the 2011 reincarnation of the Austin Aztex, which went on indefinite hiatus following the 2015 Memorial Day floods washing out their venue at House Park; and Austin Bold FC, which play in the second-division USL Championship at Circuit of the Americas",
  "strDescriptionIT": "L'Austin FC (informalmente Austin Football Club) è una società calcistica statunitense con sede nella città di Austin (Texas). Dal 2021 milita nella Major League Soccer (MLS) e disputa le proprie partite casalinghe al Q2 Stadium di Austin, impianto da 20 500 posti a sedere.",
  "strTeamBadge": "https://www.thesportsdb.com/images/media/team/badge/a3dlg61595434277.png",
  "strTeamJersey": "https://www.thesportsdb.com/images/media/team/jersey/elehch1645735462.png",
  "strTeamLogo": "https://www.thesportsdb.com/images/media/team/logo/9ariwr1595434276.png",
  "strTeamFanart1": "https://www.thesportsdb.com/images/media/team/fanart/bhpbl21622205760.jpg",
  "strTeamFanart2": "https://www.thesportsdb.com/images/media/team/fanart/q7mm781622205766.jpg",
  "strTeamFanart3": "https://www.thesportsdb.com/images/media/team/fanart/h1c6qc1622205772.jpg",
  "strTeamFanart4": "https://www.thesportsdb.com/images/media/team/fanart/rjad361622205779.jpg",
  "strTeamBanner": "https://www.thesportsdb.com/images/media/team/banner/g0lxaq1622205885.jpg",
  "strGender": "Male"
}

const team2 = {
  "idTeam": "134154",
  "idSoccerXML": "584",
  "idAPIfootball": "1607",
  "intLoved": "1",
  "strTeam": "Chicago Fire",
  "strTeamShort": null,
  "strAlternate": "",
  "intFormedYear": "1997",
  "strSport": "Soccer",
  "strLeague": "American Major League Soccer",
  "idLeague": "4346",
  "strLeague2": "US Open Cup",
  "strManager": "",
  "strStadium": "Toyota Park",
  "strKeywords": "",
  "strRSS": "",
  "strStadiumThumb": "https://www.thesportsdb.com/images/media/team/stadium/wspwru1435223223.jpg",
  "strStadiumDescription": "Toyota Park is a soccer-specific stadium located at 71st Street and Harlem Avenue in Bridgeview, Illinois, about 12 miles southwest from downtown Chicago. It is the home stadium of the Chicago Fire Soccer Club, members of Major League Soccer (MLS), and the Chicago Bliss of the Legends Football League (LFL). Toyota Park was developed at a cost of around $100 million. The facility opened June 11, 2006. It also previously hosted the Chicago Machine of Major League Lacrosse and the Chicago Red Stars of Women's Professional Soccer. The stadium's capacity is 20,000.\r\n\r\nDesigned to incorporate traditional stadium features from both American and European facilities, Toyota Park includes mostly covered seating, a brick facade and stone entry archway, and first rows that are less than three yards from the field. It also includes 42 executive suites, 6 larger party suites, the Illinois Soccer Hall of Fame, and the Fire club offices as well as a large stadium club/banquet room measuring over 9,000 square feet (840 m2).\r\n\r\nA practice facility with two fields (one natural grass, one artificial turf) for the Fire club and its youth programs is adjacent to the stadium. The stadium's design is expandable to 30,000 seats without great cost for future growth. The natural grass stadium field includes a $1.7 million turf management system including full heating, drainage, and aeration capabilities and measures 120 yards (110 m) long by 75 yards (69 m) wide.\r\n\r\nA permanent stage was incorporated into the stadium design to not only facilitate hosting concerts but also to be able to quickly change from stage configuration to soccer configuration and vice versa. A typical conversion takes less than 18 hours to complete, and an additional 8,000 chairback seats can be accommodated on the field for concerts and other stage events.\r\n\r\nIn 2006, Toyota announced that it had entered into a 10-year naming rights agreement and the stadium was renamed Toyota Park.",
  "strStadiumLocation": "Bridgeview, Illinois",
  "intStadiumCapacity": "20000",
  "strWebsite": "www.chicago-fire.com",
  "strFacebook": "www.facebook.com/chicagofire",
  "strTwitter": "twitter.com/ChicagoFire",
  "strInstagram": "www.instagram.com/chicagofire",
  "strDescriptionEN": "Chicago Fire Soccer Club is an American professional soccer club based in the Chicago suburb of Bridgeview, Illinois. The team competes in Major League Soccer (MLS). The organization is named for the Great Chicago Fire of 1871, and was founded on October 8, 1997, the event's 126th anniversary. In their first league season in 1998, the Fire won the MLS Cup as well as the U.S. Open Cup (the \"double\"). They have also won U.S. Open Cups in 2000, 2003, and 2006; in addition to the 2003 MLS Supporters' Shield.\r\n\r\nThe Fire maintain an extensive development system, consisting of the Chicago Fire Premier (Premier Development League and Super-20 League teams), the Chicago Fire NPSL team, the Chicago Fire Development Academy, and the Chicago Fire Juniors youth organization. They also operate the Chicago Fire Foundation, the team's community-based charitable division. Toyota Park is the Fire's home stadium. The team's head coach is Frank Yallop. Brian Bliss serves as the team's technical director. Yallop's coaching staff is rounded out by assistant coaches Marc Bircham and Clint Mathis, and goalkeeping coach Aron Hyde.\r\n\r\nFounded on October 8, 1997, the club was originally based at Soldier Field. Since 2006, they reside at Toyota Park at 71st and Harlem Avenue in Bridgeview. The owners of the Fire are Andell Holdings, who purchased the club in 2007. Andell Holdings director Andrew Hauptman acts as club chairman, while the director of soccer is Frank Yallop and the Chief Operating Officer is Atul Khosla. The Fire are historically most successful in the U.S. Open Cup; winning championships in 1998, 2000, 2003, and 2006. The Fire keeps a close connection with the Chicago Sting (its predecessor team in the NASL) by holding frequent commemorative events, reunions, and wearing Sting-inspired shirts.\r\n\r\nMany notable players have worn the Fire shirt, including U.S. internationals Chris Armas, Carlos Bocanegra, Frank Klopas, DaMarcus Beasley, Brian McBride, Tony Sanneh, Cory Gibbs, Ante Razov, Josh Wolff and Eric Wynalda. Some of the club's other notable American professional players include C.J. Brown, Jesse Marsch, Chris Rolfe, and Zach Thornton. The Fire also has a reputation for importing international talent, from established veterans like Pável Pardo, Piotr Nowak, Cuauhtémoc Blanco, Tomasz Frankowski, Lubos Kubik and Hristo Stoichkov; in addition to younger players such as Patrick Nyarko, Marco Pappa, Damani Ralph, Bakary Soumare, and Nery Castillo.",
  "strDescriptionDE": null,
  "strDescriptionFR": null,
  "strDescriptionCN": null,
  "strDescriptionIT": "l Chicago Fire Football Club, noto semplicemente come Chicago Fire, è una società calcistica statunitense con sede nella città di Chicago (Illinois). Milita nella Major League Soccer dal 1998 e disputa le proprie partite casalinghe all'U.S. Soldier Field, impianto da 60.000 posti a sedere.\r\n\r\nFondato nel 1998, alla sua stagione di esordio il club vinse sùbito il titolo MLS e la Lamar Hunt Open Cup, trofeo che ha poi conquistato altre tre volte nel corso della sua storia (2000, 2003, 2006); nel suo palmarès figura anche un MLS Supporters' Shield, vinto nel 2003.\r\n\r\nOltre alla prima squadra, il Chicago Fire schiera anche una formazione di riserve che gioca nella Premier Development League.",
  "strKitColour1": "",
  "strKitColour2": "",
  "strKitColour3": "",
  "strGender": "Male",
  "strCountry": "United States",
  "strTeamBadge": "https://www.thesportsdb.com/images/media/team/badge/8xuc781639493166.png",
  "strTeamJersey": "https://www.thesportsdb.com/images/media/team/jersey/v42z3h1645646455.png",
  "strTeamLogo": "https://www.thesportsdb.com/images/media/team/logo/thrk3l1547208639.png",
  "strTeamFanart1": "https://www.thesportsdb.com/images/media/team/fanart/zmkl2u1547482369.jpg",
  "strTeamFanart2": "https://www.thesportsdb.com/images/media/team/fanart/1oqj851547482385.jpg",
  "strTeamFanart3": "https://www.thesportsdb.com/images/media/team/fanart/thlgra1547482399.jpg",
  "strTeamFanart4": "https://www.thesportsdb.com/images/media/team/fanart/taelvz1547482411.jpg",
  "strTeamBanner": "https://www.thesportsdb.com/images/media/team/banner/hwkpcu1547483402.jpg",
  "strYoutube": "www.youtube.com/user/officialfiresoccer",
  "strLocked": "unlocked"
}
const team3 = {
  "idTeam": "135851",
  "idSoccerXML": "4780",
  "idAPIfootball": "1608",
  "intLoved": null,
  "strTeam": "Atlanta United",
  "strTeamShort": null,
  "strAlternate": "Atlanta Utd",
  "intFormedYear": "2014",
  "strSport": "Soccer",
  "strLeague": "American Major League Soccer",
  "strStadium": "Mercedes Stadium",
  "strKeywords": "",
  "strRSS": "",
  "strStadiumThumb": "https://www.thesportsdb.com/images/media/team/stadium/zbt2cs1514566030.jpg",
  "strStadiumDescription": "The Mercedes-Benz Stadium is a multi-purpose retractable roof stadium located in Atlanta, Georgia. The home of the Atlanta Falcons of the National Football League (NFL) and Atlanta United FC of Major League Soccer (MLS), it replaced the adjacent NFL indoor arena Georgia Dome, the Falcons' home stadium for a quarter century, from 1992 through 2016. Mercedes-Benz stadium holds the record of the world's largest halo board and is one of few football stadiums with retractable roofs.\r\n\r\nThe stadium is owned by the state of Georgia through the Georgia World Congress Center Authority, and operated by AMB Group, the parent organization of the Falcons and Atlanta United. The total cost was estimated at $1.6 billion, as of June 2016. The stadium officially opened on August 26, 2017 with a Falcons preseason game against the Arizona Cardinals, despite the retractable roof system being incomplete at the time.",
  "strStadiumLocation": "Atlanta, Georgia",
  "intStadiumCapacity": "42500",
  "strWebsite": "www.atlutd.com",
  "strFacebook": "www.facebook.com/AtlantaUnitedFC",
  "strTwitter": "twitter.com/atlutd",
  "strInstagram": "www.instagram.com/atlutd",
  "strDescriptionEN": "Atlanta United FC is an American professional soccer club based in Atlanta, Georgia, that began play in 2017 as a member of the Eastern Conference of Major League Soccer. The club, which was announced by the league as an expansion franchise on April 16, 2014, is owned and operated by Home Depot co-founder and Atlanta Falcons owner Arthur Blank. The team currently plays at Bobby Dodd Stadium, and is scheduled to move on July 30, 2017 to Mercedes-Benz Stadium.\r\n\r\nAs the largest metropolitan area without an MLS franchise, Atlanta Falcons owner Arthur Blank's AMB Group submitted a bid in 2008 for an expansion franchise, but withdrew the bid in early 2009 due to its inability to get a stadium built. Despite the withdrawal of the bid, Dan Courtemanche, MLS's executive vice president, said on July 10 that regular discussion with Blank regarding Atlanta's potential as expansion market were occurring.\r\n\r\nOn May 2011, the NHL's Atlanta Thrashers relocated to Winnipeg and became the Winnipeg Jets. The Thrashers relocation helped re-start the efforts and talks of bringing an MLS expansion team to Atlanta.\r\n\r\nIn May 2012, while the Falcons' proposed new stadium was going through the approval process, MLS Commissioner Don Garber cited Atlanta as one of three \"intriguing\" markets for future league expansion. Additionally, when Blank presented his case for a new stadium at the Falcons' annual meeting with season ticket holders, he stated that an additional benefit of the stadium was that it could help attract a Major League Soccer franchise and potentially host World Cup matches. Later that year, in November, Garber said that if the Falcons could complete plans for a new stadium, MLS would \"try to figure out how an MLS team could be part of their plans.\"\r\n\r\nRich McKay, Falcons president and CEO, said in 2013 that the team was \"open to various options, including  ownership of a team or someone else owning a team\". Dan Courtemanche said, \"We are big believers in the Atlanta market,\" and cited the city's growing Hispanic population and corporations that could serve as its sponsors. Then, in March 2013, the city and the Falcons agreed to financing terms, and in May 2013, the Georgia Department of Economic Development board approved $30 million in bonds to finance the land purchase for the new stadium. The stadium was set to open in 2017 and could be configured for professional soccer. Atlanta remained at the top of the list for an MLS expansion team, as Garber, in the December 2013 MLS State of the League address, emphasized that it was a goal to continue to expand in the southeast, and added, \"if we can continue to advance our discussions positively with Arthur  and the  Falcons, we hope to be able to get a situation finalized so that could potentially be our second team. Orlando being the first, maybe Atlanta or Miami would be the second or the third.\" In December 2013, Garber said the league was making progress in discussions with the Falcons and that the stadium situation was finalized. Negotiations continued with Courtemanche saying in January 2014 that Atlanta \"remains a great prospect for MLS expansion,\" and in February 2014, Rich McKay confirming the parties were \"far along in negotiations.\"\r\n\r\nFinally, on April 16, 2014, Blank announced that MLS had awarded an expansion franchise to his group to begin play in 2017. Atlanta became the second franchise awarded in the southeastern United States in five months, following the Orlando City SC announcement in late 2013. The Southeast had been without any MLS team since the Miami Fusion and Tampa Bay Mutiny clubs were dissolved in 2001.\r\n\r\nAtlanta lost their first regular season MLS game 2–1 to New York Red Bulls at Bobby Dodd Stadium with 55,297 in attendance. Yamil Asad scored the goal, becoming the first goalscorer in club history. A week later, they registered their first MLS win on the road with a 6–1 away defeat of fellow expansion team Minnesota United FC. Atlanta United registered their first MLS home win on March 18, 2017 against Chicago Fire who were down to ten men in the eleventh minute, with a 4–0 final score front of a sold-out Bobby Dodd Stadium.",
  "strDescriptionIT": "L'Atlanta United FC[1] è una società calcistica statunitense con sede nella città di Atlanta (Georgia). Dal 2017 milita nella Major League Soccer (MLS) e disputa le proprie partite casalinghe al Mercedes-Benz Stadium, impianto da 71.000 posti a sedere.\r\n\r\nNel 2018 il club ha vinto il primo titolo MLS della sua storia, sconfiggendo in finale i Portland Timbers.",
  "strGender": "Male",
  "strCountry": "United States",
  "strTeamBadge": "https://www.thesportsdb.com/images/media/team/badge/ej091x1602103070.png",
  "strTeamJersey": "https://www.thesportsdb.com/images/media/team/jersey/vatdab1645735217.png",
  "strTeamLogo": "https://www.thesportsdb.com/images/media/team/logo/15cswn1547050364.png",
  "strTeamFanart1": "https://www.thesportsdb.com/images/media/team/fanart/pofjda1547050389.jpg",
  "strTeamFanart2": "https://www.thesportsdb.com/images/media/team/fanart/7s13f71547050407.jpg",
  "strTeamFanart3": "https://www.thesportsdb.com/images/media/team/fanart/6vfi3c1547050425.jpg",
  "strTeamFanart4": "https://www.thesportsdb.com/images/media/team/fanart/91sm8m1547050438.jpg",
  "strTeamBanner": "https://www.thesportsdb.com/images/media/team/banner/w8s1jm1547050455.jpg",
  "strYoutube": "www.youtube.com/channel/UC8fg8L4X7qpQdHJgxpM4qxw",
  "strLocked": "unlocked"
}

const team4 = {
  "idTeam": "140078",
  "idSoccerXML": null,
  "idAPIfootball": "18310",
  "intLoved": null,
  "strTeam": "Charlotte FC",
  "strTeamShort": null,
  "strAlternate": "Charlotte Football Club",
  "intFormedYear": "2022",
  "strSport": "Soccer",
  "strLeague": "American Major League Soccer",
  "idLeague": "4346",
  "strLeague2": "US Open Cup",
  "idLeague2": "5199",
  "strLeague3": "",
  "idLeague3": null,
  "strLeague4": "",
  "idLeague4": null,
  "strLeague5": "",
  "idLeague5": null,
  "strLeague6": "",
  "idLeague6": null,
  "strLeague7": "",
  "idLeague7": null,
  "strDivision": null,
  "strManager": "",
  "strStadium": "Bank of America Stadium",
  "strKeywords": "",
  "strRSS": "",
  "strStadiumThumb": "https://www.thesportsdb.com/images/media/team/stadium/tunzoc1641310342.jpg",
  "strStadiumDescription": "Bank of America Stadium is a 75,523-seat football stadium located on 33 acres (13 ha) in uptown Charlotte, North Carolina, United States. It is the home facility and headquarters of the Carolina Panthers of the National Football League, and is planned to be the home of the Charlotte MLS team. The stadium opened in 1996 as Ericsson Stadium before Bank of America purchased the naming rights in 2004. Former Panthers president Danny Morrison called it \" classic American stadium\" due to its bowl design and other features.\r\n\r\nIn addition to the Panthers, the stadium hosts the annual Duke's Mayo Bowl, which features teams from the Atlantic Coast Conference (ACC) and either the Southeastern Conference (SEC) or the Big Ten Conference. The stadium was planned to host the annual ACC Championship Game through at least 2019; the game was moved in 2016 but reinstated in 2017. The largest crowd to ever attend a football game at the stadium was on September 9, 2018, when 74,532 fans watched the Panthers defeat the Dallas Cowboys 16–8.",
  "strStadiumLocation": "Charlotte, North Carolina",
  "intStadiumCapacity": "75325",
  "strWebsite": "charlottefootballclub.com",
  "strFacebook": "facebook.com/CharlotteMLS",
  "strTwitter": "twitter.com/charlotteMLS",
  "strInstagram": "instagram.com/MLSCharlotte",
  "strDescriptionEN": "Charlotte Football Club is an American professional soccer club based in Charlotte. The team competes in Major League Soccer (MLS) as a member of the league's Eastern Conference. The team is owned by David Tepper, who was awarded the expansion franchise on December 17, 2019. \r\nThe Charlotte area has historically been home to several lower-division soccer teams, dating back to the Carolina Lightnin' in the early 1980s. The Lightnin' won the American Soccer League championship in 1981, played in front of 20,163 people at American Legion Memorial Stadium. After the league folded in 1983, the team played for one season as the Charlotte Gold in United Soccer League before ceasing operations. Professional soccer did not return to Charlotte until the founding of the Charlotte Eagles in 1991, who joined the USISL in 1993.",
  "strDescriptionDE": null,
  "strDescriptionFR": null,
  "strDescriptionCN": null,
  "strDescriptionIT": "Il Charlotte Football Club, più semplicemente noto come Charlotte FC, è una società calcistica statunitense con sede nella città di Charlotte, nella Carolina del Nord. Fondata nel 2019, dal 2022 militerà nella Major League Soccer (MLS) e disputerà le proprie partite casalinghe al Bank of America Stadium, impianto da 75 535 posti a sedere nonché casa dei Carolina Panthers della NFL, con cui ha in comune anche il proprietario David Tepper.",
  "strDescriptionJP": null,
  "strDescriptionRU": null,
  "strDescriptionES": null,
  "strDescriptionPT": null,
  "strDescriptionSE": null,
  "strDescriptionNL": null,
  "strDescriptionHU": null,
  "strDescriptionNO": null,
  "strDescriptionIL": null,
  "strDescriptionPL": null,
  "strKitColour1": "",
  "strKitColour2": "",
  "strKitColour3": "",
  "strGender": "Male",
  "strCountry": "United States",
  "strTeamBadge": "https://www.thesportsdb.com/images/media/team/badge/b6p4uz1595434047.png",
  "strTeamJersey": "https://www.thesportsdb.com/images/media/team/jersey/heck3z1641309895.png",
  "strTeamLogo": "https://www.thesportsdb.com/images/media/team/logo/rrqwww1595434046.png",
  "strTeamFanart1": null,
  "strTeamFanart2": null,
  "strTeamFanart3": null,
  "strTeamFanart4": null,
  "strTeamBanner": null,
  "strYoutube": "youtube.com/channel/UCx4A5iThing38J7V05aLL2g",
  "strLocked": "unlocked"}

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  
  }

  componentDidMount() {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }

  render() {
    return (
      function Form() {
        const [teams, setTeams] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
    
        const searchTeams = async (strTeam) => {
          const respone = await fetch(`${API_URL}&s=${strTeam}`);
          const data = await respone.json();
    
          setTeams(data.Search);
          console.log(data.Search);
        }
    
        useEffect(() => {
          searchTeams('Austin');
        },[]);
      

    <div className="app">
    <h1>Major League Soccer Teams</h1>

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

    <div className='container'>
      <TeamCard team1={team1}/>
      <TeamCard team1={team2}/>
      <TeamCard team1={team4}/>
      <TeamCard team1={team3}/>
    </div>
    {/* {teams?.length > 0 
      ? (
        <div className='container'>
          {teams.map((team) => (
            <TeamCard team={team1}/>
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No teams found</h2>
        </div>
      )
    } */}
    </div>}
   );
  }
}
export default App;
    

// const App = () => {
//   const [teams, setTeams] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const searchTeams = async (strTeam) => {
//     const respone = await fetch(`${API_URL}&s=${strTeam}`);
//     const data = await respone.json();

//     setTeams(data.Search);
//     console.log(data.Search);
//   }

//   useEffect(() => {
//     searchTeams('Austin');
//   },[]);

  //return (
  //   <div className="app">
  //     <h1>Major League Soccer Teams</h1>

  //     <div className='search'>
  //       <input 
  //         placeholder='Search for teams'
  //         value={searchTerm}
  //         onChange={(e) => setSearchTerm(e.target.value)} />
  //       <img 
  //       src={SearchIcon}
  //       alt="search"
  //       onClick={() => searchTeams(searchTerm)}/>
  //     </div>

  //     <div className='container'>
  //       <TeamCard team1={team1}/>
  //       <TeamCard team1={team2}/>
  //       <TeamCard team1={team4}/>
  //       <TeamCard team1={team3}/>
  //     </div>
  //     {/* {teams?.length > 0 
  //       ? (
  //         <div className='container'>
  //           {teams.map((team) => (
  //             <TeamCard team={team1}/>
  //           ))}
  //         </div>
  //       ) : (
  //         <div className='empty'>
  //           <h2>No teams found</h2>
  //         </div>
  //       )
  //     } */}
  //   </div>
  // );
//}

