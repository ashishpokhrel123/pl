import axios from "axios";
// import { baseURL } from "./api";

let baseURL =
  "https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json";

const leagueStanding = [];

const getFootballScore = async () => {
  const result = await axios.get(baseURL);
  const allMatches = result?.data.matches;
  const clubName = [...new Set(allMatches.map((item) => item.team1))];
  console.log(clubName);
  let clubScore = [];
  let name;

  allMatches.map((data, index) => {
    const score = {
      name: clubName[index],
      score: data.score ? data.score.ft[0] : 0,
    };

    clubScore.push(score);
  });

  console.log(clubScore, "totalscore");

  let win = 0,
    draw = 0,
    loss = 0;

  clubName.map((name, index) => {
    const standing = {
      position: index,
      name: name,
      played: [...new Set(allMatches.map((item) => item.round))].length,
      win: win,
      draw: draw,
      loss: loss,
      gf: 0,
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
