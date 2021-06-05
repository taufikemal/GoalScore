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
        "Santos FC":"https://crests.football-data.org/6685.svg",
      }
      let hasil = data.matches
      console.log(hasil)
      let teamHome = hasil[0].homeTeam.name
      let awayHome = hasil[0].awayTeam.name
      document.getElementById('finished-card-score-big-match0').innerHTML = hasil[0].status
      document.getElementById('card-round-big-match0').innerHTML = `Fixtures ${hasil[0].matchday}`
      document.getElementById('card-league-img-big-match0').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-big-match0').src = team[teamHome]
      document.getElementById('card-hometeam-name-big-match0').innerHTML = teamHome.substr(0,15)
      document.getElementById('card-date-big-match0').innerHTML = hasil[0].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-big-match0').src = team[awayHome]
      document.getElementById('card-awayteam-name-big-match0').innerHTML = awayHome.substr(0,15)


      let teamHome1 = hasil[1].homeTeam.name
      let awayHome1 = hasil[1].awayTeam.name
      document.getElementById('finished-card-score-big-match1').innerHTML = hasil[1].status
      document.getElementById('card-round-big-match1').innerHTML = `Fixtures ${hasil[1].matchday}`
      document.getElementById('card-league-img-big-match1').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-big-match1').src = team[teamHome1]
      document.getElementById('card-hometeam-name-big-match1').innerHTML = teamHome1.substr(0,15)
      document.getElementById('card-date-big-match1').innerHTML = hasil[1].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-big-match1').src = team[awayHome1]
      document.getElementById('card-awayteam-name-big-match1').innerHTML = awayHome1.substr(0,15)

      let teamHome2 = hasil[2].homeTeam.name
      let awayHome2 = hasil[2].awayTeam.name
      document.getElementById('finished-card-score-big-match2').innerHTML = hasil[2].status
      document.getElementById('card-round-big-match2').innerHTML = `Fixtures ${hasil[2].matchday}`
      document.getElementById('card-league-img-big-match2').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-big-match2').src = team[teamHome2]
      document.getElementById('card-hometeam-name-big-match2').innerHTML = teamHome2.substr(0,15)
      document.getElementById('card-date-big-match2').innerHTML = hasil[2].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-big-match2').src = team[awayHome2]
      document.getElementById('card-awayteam-name-big-match2').innerHTML = awayHome2.substr(0,15)

      let teamHome3 = hasil[3].homeTeam.name
      let awayHome3 = hasil[3].awayTeam.name
      document.getElementById('finished-card-score-prem1').innerHTML = hasil[3].status
      document.getElementById('card-round-prem1').innerHTML = `Fixtures ${hasil[3].matchday}`
      document.getElementById('card-league-img-prem1').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-prem1').src = team[teamHome3]
      document.getElementById('card-hometeam-name-prem1').innerHTML = teamHome3.substr(0,15)
      document.getElementById('card-date-prem1').innerHTML = hasil[3].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem1').src = team[awayHome3]
      document.getElementById('card-awayteam-name-prem1').innerHTML = awayHome3.substr(0,15)

      let teamHome4 = hasil[4].homeTeam.name
      let awayHome4 = hasil[4].awayTeam.name
      document.getElementById('finished-card-score-prem2').innerHTML = hasil[4].status
      document.getElementById('card-round-prem2').innerHTML = `Fixtures ${hasil[4].matchday}`
      document.getElementById('card-league-img-prem2').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-prem2').src = team[teamHome4]
      document.getElementById('card-hometeam-name-prem2').innerHTML = teamHome4.substr(0,15)
      document.getElementById('card-date-prem2').innerHTML = hasil[4].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem2').src = team[awayHome4]
      document.getElementById('card-awayteam-name-prem2').innerHTML = awayHome4.substr(0,15)

      let teamHome5 = hasil[5].homeTeam.name
      let awayHome5 = hasil[5].awayTeam.name
      document.getElementById('finished-card-score-prem3').innerHTML = hasil[5].status
      document.getElementById('card-round-prem3').innerHTML = `Fixtures ${hasil[5].matchday}`
      document.getElementById('card-league-img-prem3').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-prem3').src = team[teamHome5]
      document.getElementById('card-hometeam-name-prem3').innerHTML = teamHome5.substr(0,15)
      document.getElementById('card-date-prem3').innerHTML = hasil[5].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem3').src = team[awayHome5]
      document.getElementById('card-awayteam-name-prem3').innerHTML = awayHome5.substr(0,15)

      let teamHome6 = hasil[6].homeTeam.name
      let awayHome6 = hasil[6].awayTeam.name
      document.getElementById('finished-card-score-prem4').innerHTML = hasil[6].status
      document.getElementById('card-round-prem4').innerHTML = `Fixtures ${hasil[6].matchday}`
      document.getElementById('card-league-img-prem4').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-prem4').src = team[teamHome6]
      document.getElementById('card-hometeam-name-prem4').innerHTML = teamHome6.substr(0,15)
      document.getElementById('card-date-prem4').innerHTML = hasil[6].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem4').src = team[awayHome6]
      document.getElementById('card-awayteam-name-prem4').innerHTML = awayHome6.substr(0,15)

      let teamHome7 = hasil[7].homeTeam.name
      let awayHome7 = hasil[7].awayTeam.name
      document.getElementById('finished-card-score-prem5').innerHTML = hasil[7].status
      document.getElementById('card-round-prem5').innerHTML = `Fixtures ${hasil[7].matchday}`
      document.getElementById('card-league-img-prem5').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-prem5').src = team[teamHome7]
      document.getElementById('card-hometeam-name-prem5').innerHTML = teamHome7.substr(0,15)
      document.getElementById('card-date-prem5').innerHTML = hasil[7].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem5').src = team[awayHome7]
      document.getElementById('card-awayteam-name-prem5').innerHTML = awayHome7.substr(0,15)

      let teamHome8 = hasil[8].homeTeam.name
      let awayHome8 = hasil[8].awayTeam.name
      document.getElementById('finished-card-score-prem6').innerHTML = hasil[8].status
      document.getElementById('card-round-prem6').innerHTML = `Fixtures ${hasil[8].matchday}`
      document.getElementById('card-league-img-prem6').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-prem6').src = team[teamHome8]
      document.getElementById('card-hometeam-name-prem6').innerHTML = teamHome8.substr(0,15)
      document.getElementById('card-date-prem6').innerHTML = hasil[8].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem6').src = team[awayHome8]
      document.getElementById('card-awayteam-name-prem6').innerHTML = awayHome8.substr(0,15)

      let teamHome9 = hasil[9].homeTeam.name
      let awayHome9 = hasil[9].awayTeam.name
      document.getElementById('finished-card-score-laliga1').innerHTML = hasil[9].status
      document.getElementById('card-round-laliga1').innerHTML = `Fixtures ${hasil[9].matchday}`
      document.getElementById('card-league-img-laliga1').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-laliga1').src = team[teamHome9]
      document.getElementById('card-hometeam-name-laliga1').innerHTML = teamHome9.substr(0,15)
      document.getElementById('card-date-laliga1').innerHTML = hasil[9].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-laliga1').src = team[awayHome9]
      document.getElementById('card-awayteam-name-laliga1').innerHTML = awayHome9.substr(0,15)

      let teamHome10 = hasil[10].homeTeam.name
      let awayHome10 = hasil[10].awayTeam.name
      document.getElementById('finished-card-score-laliga2').innerHTML = hasil[10].status
      document.getElementById('card-round-laliga2').innerHTML = `Fixtures ${hasil[10].matchday}`
      document.getElementById('card-league-img-laliga2').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-laliga2').src = team[teamHome10]
      document.getElementById('card-hometeam-name-laliga2').innerHTML = teamHome10.substr(0,15)
      document.getElementById('card-date-laliga2').innerHTML = hasil[10].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-laliga2').src = team[awayHome10]
      document.getElementById('card-awayteam-name-laliga2').innerHTML = awayHome10.substr(0,15)

      let teamHome11 = hasil[11].homeTeam.name
      let awayHome11 = hasil[11].awayTeam.name
      document.getElementById('finished-card-score-laliga3').innerHTML = hasil[11].status
      document.getElementById('card-round-laliga3').innerHTML = `Fixtures ${hasil[11].matchday}`
      document.getElementById('card-league-img-laliga3').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-laliga3').src = team[teamHome11]
      document.getElementById('card-hometeam-name-laliga3').innerHTML = teamHome11.substr(0,15)
      document.getElementById('card-date-laliga3').innerHTML = hasil[11].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-laliga3').src = team[awayHome11]
      document.getElementById('card-awayteam-name-laliga3').innerHTML = awayHome11.substr(0,15)

      let teamHome12 = hasil[12].homeTeam.name
      let awayHome12 = hasil[12].awayTeam.name
      document.getElementById('finished-card-score-laliga4').innerHTML = hasil[12].status
      document.getElementById('card-round-laliga4').innerHTML = `Fixtures ${hasil[12].matchday}`
      document.getElementById('card-league-img-laliga4').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-laliga4').src = team[teamHome12]
      document.getElementById('card-hometeam-name-laliga4').innerHTML = teamHome12.substr(0,15)
      document.getElementById('card-date-laliga4').innerHTML = hasil[12].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-laliga4').src = team[awayHome12]
      document.getElementById('card-awayteam-name-laliga4').innerHTML = awayHome12.substr(0,15)

      let teamHome13 = hasil[13].homeTeam.name
      let awayHome13 = hasil[13].awayTeam.name
      document.getElementById('finished-card-score-laliga5').innerHTML = hasil[13].status
      document.getElementById('card-round-laliga5').innerHTML = `Fixtures ${hasil[13].matchday}`
      document.getElementById('card-league-img-laliga5').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-laliga5').src = team[teamHome13]
      document.getElementById('card-hometeam-name-laliga5').innerHTML = teamHome13.substr(0,15)
      document.getElementById('card-date-laliga5').innerHTML = hasil[13].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-laliga5').src = team[awayHome13]
      document.getElementById('card-awayteam-name-laliga5').innerHTML = awayHome13.substr(0,15)

      let teamHome14 = hasil[14].homeTeam.name
      let awayHome14 = hasil[14].awayTeam.name
      document.getElementById('finished-card-score-laliga6').innerHTML = hasil[14].status
      document.getElementById('card-round-laliga6').innerHTML = `Fixtures ${hasil[14].matchday}`
      document.getElementById('card-league-img-laliga6').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-laliga6').src = team[teamHome14]
      document.getElementById('card-hometeam-name-laliga6').innerHTML = teamHome14.substr(0,15)
      document.getElementById('card-date-laliga6').innerHTML = hasil[14].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-laliga6').src = team[awayHome14]
      document.getElementById('card-awayteam-name-laliga6').innerHTML = awayHome14.substr(0,15)

      let teamHome15 = hasil[15].homeTeam.name
      let awayHome15 = hasil[15].awayTeam.name
      document.getElementById('finished-card-score-laliga7').innerHTML = hasil[15].status
      document.getElementById('card-round-laliga7').innerHTML = `Fixtures ${hasil[15].matchday}`
      document.getElementById('card-league-img-laliga7').src = `../assets/img/leaguehome/Brazilian Seria A.png`
      document.getElementById('card-hometeam-img-laliga7').src = team[teamHome15]
      document.getElementById('card-hometeam-name-laliga7').innerHTML = teamHome15.substr(0,15)
      document.getElementById('card-date-laliga7').innerHTML = hasil[15].utcDate.substr(0,10).split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-laliga7').src = team[awayHome15]
      document.getElementById('card-awayteam-name-laliga7').innerHTML = awayHome15.substr(0,15)
    });
};

headbrazil()
