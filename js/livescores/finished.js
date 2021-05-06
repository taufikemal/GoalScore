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

      let homeprem4 = result[4].strHomeTeam.split(" ")
      let awayprem4 = result[4].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem4').innerHTML = result[4].strStatus.substr(6,8)
      document.getElementById('card-round-prem4').innerHTML = 'Fixtures '+result[4].intRound
      document.getElementById('card-league-img-prem4').src = `../assets/img/leaguehome/${result[4].strLeague}.png`
      document.getElementById('card-hometeam-img-prem4').src = `../assets/img/All Teams/${result[4].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem4').innerHTML = homeprem4[homeprem4.length-1]
      document.getElementById('card-scorehome-prem4').innerHTML = `${result[4].intHomeScore}`
      document.getElementById('card-scoreaway-prem4').innerHTML = `${result[4].intAwayScore}`
      document.getElementById('card-date-prem4').innerHTML = result[4].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem4').src = `../assets/img/All Teams/${result[4].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem4').innerHTML = awayprem4[awayprem4.length-1]

      let homeprem5 = result[5].strHomeTeam.split(" ")
      let awayprem5 = result[5].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem5').innerHTML = result[5].strStatus.substr(6,8)
      document.getElementById('card-round-prem5').innerHTML = 'Fixtures '+result[5].intRound
      document.getElementById('card-league-img-prem5').src = `../assets/img/leaguehome/${result[5].strLeague}.png`
      document.getElementById('card-hometeam-img-prem5').src = `../assets/img/All Teams/${result[5].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem5').innerHTML = homeprem5[homeprem5.length-1]
      document.getElementById('card-scorehome-prem5').innerHTML = `${result[5].intHomeScore}`
      document.getElementById('card-scoreaway-prem5').innerHTML = `${result[5].intAwayScore}`
      document.getElementById('card-date-prem5').innerHTML = result[5].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem5').src = `../assets/img/All Teams/${result[5].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem5').innerHTML = awayprem5[awayprem5.length-1]

      let homeprem6 = result[6].strHomeTeam.split(" ")
      let awayprem6 = result[6].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem6').innerHTML = result[6].strStatus.substr(6,8)
      document.getElementById('card-round-prem6').innerHTML = 'Fixtures '+result[6].intRound
      document.getElementById('card-league-img-prem6').src = `../assets/img/leaguehome/${result[6].strLeague}.png`
      document.getElementById('card-hometeam-img-prem6').src = `../assets/img/All Teams/${result[6].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem6').innerHTML = homeprem6[homeprem6.length-1]
      document.getElementById('card-scorehome-prem6').innerHTML = `${result[6].intHomeScore}`
      document.getElementById('card-scoreaway-prem6').innerHTML = `${result[6].intAwayScore}`
      document.getElementById('card-date-prem6').innerHTML = result[6].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem6').src = `../assets/img/All Teams/${result[6].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem6').innerHTML = awayprem6[awayprem6.length-1]
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

          let homelaliga1 = result[1].strHomeTeam.split(" ")
          let awaylaliga1 = result[1].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga1').innerHTML = result[1].strStatus.substr(6,8)
          document.getElementById('card-round-laliga1').innerHTML = 'Fixtures '+result[1].intRound
          document.getElementById('card-league-img-laliga1').src = `../assets/img/leaguehome/${result[1].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga1').src = `../assets/img/All Teams/${result[1].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga1').innerHTML = homelaliga1[homelaliga1.length-1]
          document.getElementById('card-scorehome-laliga1').innerHTML = `${result[1].intHomeScore}`
          document.getElementById('card-scoreaway-laliga1').innerHTML = `${result[1].intAwayScore}`
          document.getElementById('card-date-laliga1').innerHTML = result[1].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga1').src = `../assets/img/All Teams/${result[1].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga1').innerHTML = awaylaliga1[awaylaliga1.length-1]

          let homelaliga2 = result[2].strHomeTeam.split(" ")
          let awaylaliga2 = result[2].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga2').innerHTML = result[2].strStatus.substr(6,8)
          document.getElementById('card-round-laliga2').innerHTML = 'Fixtures '+result[2].intRound
          document.getElementById('card-league-img-laliga2').src = `../assets/img/leaguehome/${result[2].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga2').src = `../assets/img/All Teams/${result[2].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga2').innerHTML = homelaliga2[homelaliga2.length-1]
          document.getElementById('card-scorehome-laliga2').innerHTML = `${result[2].intHomeScore}`
          document.getElementById('card-scoreaway-laliga2').innerHTML = `${result[2].intAwayScore}`
          document.getElementById('card-date-laliga2').innerHTML = result[2].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga2').src = `../assets/img/All Teams/${result[2].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga2').innerHTML = awaylaliga2[awaylaliga2.length-1]

          let homelaliga3 = result[3].strHomeTeam.split(" ")
          let awaylaliga3 = result[3].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga3').innerHTML = result[3].strStatus.substr(6,8)
          document.getElementById('card-round-laliga3').innerHTML = 'Fixtures '+result[3].intRound
          document.getElementById('card-league-img-laliga3').src = `../assets/img/leaguehome/${result[3].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga3').src = `../assets/img/All Teams/${result[3].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga3').innerHTML = homelaliga3[homelaliga3.length-1]
          document.getElementById('card-scorehome-laliga3').innerHTML = `${result[3].intHomeScore}`
          document.getElementById('card-scoreaway-laliga3').innerHTML = `${result[3].intAwayScore}`
          document.getElementById('card-date-laliga3').innerHTML = result[3].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga3').src = `../assets/img/All Teams/${result[3].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga3').innerHTML = awaylaliga3[awaylaliga3.length-1]

          let homelaliga4 = result[4].strHomeTeam.split(" ")
          let awaylaliga4 = result[4].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga4').innerHTML = result[4].strStatus.substr(6,8)
          document.getElementById('card-round-laliga4').innerHTML = 'Fixtures '+result[4].intRound
          document.getElementById('card-league-img-laliga4').src = `../assets/img/leaguehome/${result[4].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga4').src = `../assets/img/All Teams/${result[4].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga4').innerHTML = homelaliga4[homelaliga4.length-1]
          document.getElementById('card-scorehome-laliga4').innerHTML = `${result[4].intHomeScore}`
          document.getElementById('card-scoreaway-laliga4').innerHTML = `${result[4].intAwayScore}`
          document.getElementById('card-date-laliga4').innerHTML = result[4].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga4').src = `../assets/img/All Teams/${result[4].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga4').innerHTML = awaylaliga4[awaylaliga4.length-1]

          let homelaliga5 = result[5].strHomeTeam.split(" ")
          let awaylaliga5 = result[5].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga5').innerHTML = result[5].strStatus.substr(6,8)
          document.getElementById('card-round-laliga5').innerHTML = 'Fixtures '+result[5].intRound
          document.getElementById('card-league-img-laliga5').src = `../assets/img/leaguehome/${result[5].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga5').src = `../assets/img/All Teams/${result[5].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga5').innerHTML = homelaliga5[homelaliga5.length-1]
          document.getElementById('card-scorehome-laliga5').innerHTML = `${result[5].intHomeScore}`
          document.getElementById('card-scoreaway-laliga5').innerHTML = `${result[5].intAwayScore}`
          document.getElementById('card-date-laliga5').innerHTML = result[5].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga5').src = `../assets/img/All Teams/${result[5].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga5').innerHTML = awaylaliga5[awaylaliga5.length-1]

          let homelaliga6 = result[6].strHomeTeam.split(" ")
          let awaylaliga6 = result[6].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga6').innerHTML = result[6].strStatus.substr(6,8)
          document.getElementById('card-round-laliga6').innerHTML = 'Fixtures '+result[6].intRound
          document.getElementById('card-league-img-laliga6').src = `../assets/img/leaguehome/${result[6].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga6').src = `../assets/img/All Teams/${result[6].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga6').innerHTML = homelaliga6[homelaliga6.length-1]
          document.getElementById('card-scorehome-laliga6').innerHTML = `${result[6].intHomeScore}`
          document.getElementById('card-scoreaway-laliga6').innerHTML = `${result[6].intAwayScore}`
          document.getElementById('card-date-laliga6').innerHTML = result[6].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga6').src = `../assets/img/All Teams/${result[6].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga6').innerHTML = awaylaliga6[awaylaliga6.length-1]
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
