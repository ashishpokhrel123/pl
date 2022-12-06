import axios from "axios";
// import { baseURL } from "./api";

let baseURL =
  "https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json";

const leagueStanding = [];

const getFootballScore = async () => {
  const result = await axios.get(baseURL);
  const allMatches = result?.data.matches;
  const clubName = [...new Set(allMatches.map((item) => item.team1))];

  clubName.map((name, index) => {
    const standing = {
      position: index,
      name: name,
      played: [...new Set(allMatches.map((item) => item.round))].length,
      win: 1,
      draw: 1,
      loss: 0,
      gf: 5,
      ga: 2,
      gd: 1,
      points: 3,
    };
    leagueStanding.push(standing);
  });
  return leagueStanding;
};

const ScoreService = {
  getFootballScore,
};

export default ScoreService;
