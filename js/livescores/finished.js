const prem = () => {
  fetch(
    "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328"
  )
    .then((response) => response.json())
    .then((data) => {
      let result = data.events;
      let home = result[0].strHomeTeam.split(" ")
      let away = result[0].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-big-match1').innerHTML = result[0].strStatus.substr(6,8)
      document.getElementById('card-round-big-match1').innerHTML = 'Fixtures '+result[0].intRound
      document.getElementById('card-league-img-big-match1').src = `../assets/img/leaguehome/${result[0].strLeague}.png`
      document.getElementById('card-hometeam-img-big-match1').src = `../assets/img/All Teams/${result[0].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-big-match1').innerHTML = home[home.length-1]
      document.getElementById('card-scorehome-big-match1').innerHTML = `${result[0].intHomeScore}`
      document.getElementById('card-scoreaway-big-match1').innerHTML = `${result[0].intAwayScore}`
      document.getElementById('card-date-big-match1').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-big-match1').src = `../assets/img/All Teams/${result[0].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-big-match1').innerHTML = away[away.length-1]


      let homeprem1 = result[1].strHomeTeam.split(" ")
      let awayprem1 = result[1].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem1').innerHTML = result[1].strStatus.substr(6,8)
      document.getElementById('card-round-prem1').innerHTML = 'Fixtures '+result[1].intRound
      document.getElementById('card-league-img-prem1').src = `../assets/img/leaguehome/${result[1].strLeague}.png`
      document.getElementById('card-hometeam-img-prem1').src = `../assets/img/All Teams/${result[1].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem1').innerHTML = homeprem1[homeprem1.length-1]
      document.getElementById('card-scorehome-prem1').innerHTML = `${result[1].intHomeScore}`
      document.getElementById('card-scoreaway-prem1').innerHTML = `${result[1].intAwayScore}`
      document.getElementById('card-date-prem1').innerHTML = result[1].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem1').src = `../assets/img/All Teams/${result[1].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem1').innerHTML = awayprem1[awayprem1.length-1]

      let homeprem2 = result[2].strHomeTeam.split(" ")
      let awayprem2 = result[2].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem2').innerHTML = result[2].strStatus.substr(6,8)
      document.getElementById('card-round-prem2').innerHTML = 'Fixtures '+result[2].intRound
      document.getElementById('card-league-img-prem2').src = `../assets/img/leaguehome/${result[2].strLeague}.png`
      document.getElementById('card-hometeam-img-prem2').src = `../assets/img/All Teams/${result[2].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem2').innerHTML = homeprem2[homeprem2.length-1]
      document.getElementById('card-scorehome-prem2').innerHTML = `${result[2].intHomeScore}`
      document.getElementById('card-scoreaway-prem2').innerHTML = `${result[2].intAwayScore}`
      document.getElementById('card-date-prem2').innerHTML = result[2].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem2').src = `../assets/img/All Teams/${result[2].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem2').innerHTML = awayprem2[awayprem2.length-1]

      let homeprem3 = result[3].strHomeTeam.split(" ")
      let awayprem3 = result[3].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem3').innerHTML = result[3].strStatus.substr(6,8)
      document.getElementById('card-round-prem3').innerHTML = 'Fixtures '+result[3].intRound
      document.getElementById('card-league-img-prem3').src = `../assets/img/leaguehome/${result[3].strLeague}.png`
      document.getElementById('card-hometeam-img-prem3').src = `../assets/img/All Teams/${result[3].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem3').innerHTML = homeprem3[homeprem3.length-1]
      document.getElementById('card-scorehome-prem3').innerHTML = `${result[3].intHomeScore}`
      document.getElementById('card-scoreaway-prem3').innerHTML = `${result[3].intAwayScore}`
      document.getElementById('card-date-prem3').innerHTML = result[3].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem3').src = `../assets/img/All Teams/${result[3].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem3').innerHTML = awayprem3[awayprem3.length-1]
    });
};
prem()

const laliga = () => {
    fetch(
        "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4335"
      )
        .then((response) => response.json())
        .then((data) => {
          let result = data.events;
          let home = result[0].strHomeTeam.split(" ")
          let away = result[0].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-big-match2').innerHTML = result[0].strStatus.substr(6,8)
          document.getElementById('card-round-big-match2').innerHTML = 'Fixtures '+result[0].intRound
          document.getElementById('card-league-img-big-match2').src = `../assets/img/leaguehome/${result[0].strLeague}.png`
          document.getElementById('card-hometeam-img-big-match2').src = `../assets/img/All Teams/${result[0].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-big-match2').innerHTML = home[home.length-1]
          document.getElementById('card-scorehome-big-match2').innerHTML = `${result[0].intHomeScore}`
          document.getElementById('card-scoreaway-big-match2').innerHTML = `${result[0].intAwayScore}`
          document.getElementById('card-date-big-match2').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-big-match2').src = `../assets/img/All Teams/${result[0].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-big-match2').innerHTML = away[away.length-1]
        });
}
laliga()

const seria = () => {
    fetch(
        "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4332"
      )
        .then((response) => response.json())
        .then((data) => {
          let result = data.events;
          let home = result[0].strHomeTeam.split(" ")
          let away = result[0].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-big-match3').innerHTML = result[0].strStatus.substr(6,8)
          document.getElementById('card-round-big-match3').innerHTML = 'Fixtures '+result[0].intRound
          document.getElementById('card-league-img-big-match3').src = `../assets/img/leaguehome/${result[0].strLeague}.png`
          document.getElementById('card-hometeam-img-big-match3').src = `../assets/img/All Teams/${result[0].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-big-match3').innerHTML = home[home.length-1]
          document.getElementById('card-scorehome-big-match3').innerHTML = `${result[0].intHomeScore}`
          document.getElementById('card-scoreaway-big-match3').innerHTML = `${result[0].intAwayScore}`
          document.getElementById('card-date-big-match3').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-big-match3').src = `../assets/img/All Teams/${result[0].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-big-match3').innerHTML = away[away.length-1]
        });
}
seria()

const bundesliga = () => {
    fetch(
        "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4331"
      )
        .then((response) => response.json())
        .then((data) => {
          let result = data.events;
          result.forEach((element) => {
            console.log(element.strHomeTeam);
            console.log(element.strAwayTeam);
          });
        });
}
