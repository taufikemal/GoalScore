const headbrazil = () => {
  fetch(
    "https://api.football-data.org/v2/competitions/BSA/matches?status=SCHEDULED",
    {
      method: "GET",
      headers: {
        "X-Auth-Token": "196ef39bf2654125a7c9e153067a115d",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let team = {
        "EC Bahia":"https://crests.football-data.org/1777.svg",
        "AC Goianiense":"https://crests.football-data.org/3988.svg",
        "RB Bragantino":"https://crests.football-data.org/4286.svg",
        "Ceará SC":"https://crests.football-data.org/1837.svg",
        "Fortaleza EC":"https://crests.football-data.org/3984.svg",
        "CA Paranaense":"https://crests.football-data.org/1768.svg",
        "CR Flamengo":"https://crests.football-data.org/1783.svg",
        "SC Recife":"https://crests.football-data.org/1778.svg",
        "SC Internacional":"https://crests.football-data.org/6684.svg",
        "Fluminense FC":"https://crests.football-data.org/1765.svg",
        "São Paulo FC":"https://crests.football-data.org/1776.svg",
        "Grêmio FBPA":"https://crests.football-data.org/1767.svg",
        "CA Mineiro":"https://crests.football-data.org/1766.svg",
        "SE Palmeiras":"https://crests.football-data.org/1769.svg",
        "SC Corinthians Paulista":"https://crests.football-data.org/1779.svg",
        "Santos FC":"https://crests.football-data.org/6685.svg"
        
      }
      let hasil = data.matches
      console.log(hasil)
      let teamHome = hasil[0].homeTeam.name
      let awayHome = hasil[0].awayTeam.name
      document.getElementById('finished-card-score-big-match0').innerHTML = hasil[0].status
      document.getElementById('card-round-big-match0').innerHTML = `Fixtures ${hasil[0].matchday}`
      document.getElementById('card-league-img-big-match0').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-big-match0').src = team[teamHome]
      document.getElementById('card-hometeam-name-big-match0').innerHTML = teamHome
      document.getElementById('card-date-big-match0').innerHTML = hasil[0].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-big-match0').src = team[awayHome]
      document.getElementById('card-awayteam-name-big-match0').innerHTML = awayHome


      let teamHome1 = hasil[1].homeTeam.name
      let awayHome1 = hasil[1].awayTeam.name
      document.getElementById('finished-card-score-big-match1').innerHTML = hasil[1].status
      document.getElementById('card-round-big-match1').innerHTML = `Fixtures ${hasil[1].matchday}`
      document.getElementById('card-league-img-big-match1').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-big-match1').src = team[teamHome1]
      document.getElementById('card-hometeam-name-big-match1').innerHTML = teamHome1
      document.getElementById('card-date-big-match1').innerHTML = hasil[1].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-big-match1').src = team[awayHome1]
      document.getElementById('card-awayteam-name-big-match1').innerHTML = awayHome1

      let teamHome2 = hasil[2].homeTeam.name
      let awayHome2 = hasil[2].awayTeam.name
      document.getElementById('finished-card-score-big-match2').innerHTML = hasil[2].status
      document.getElementById('card-round-big-match2').innerHTML = `Fixtures ${hasil[2].matchday}`
      document.getElementById('card-league-img-big-match2').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-big-match2').src = team[teamHome2]
      document.getElementById('card-hometeam-name-big-match2').innerHTML = teamHome2
      document.getElementById('card-date-big-match2').innerHTML = hasil[2].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-big-match2').src = team[awayHome2]
      document.getElementById('card-awayteam-name-big-match2').innerHTML = awayHome2
    });
};

headbrazil()
