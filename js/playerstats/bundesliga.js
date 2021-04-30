fetch('https://api.football-data.org/v2/competitions/BL1/scorers',{
    "method" : "GET",
    "headers" : {
        "X-Auth-Token" : "e88f743b2b444752a685b7d76e59b39e"
    }
})
.then(response => response.json())
.then((data)=>{
    let result = data.scorers
    result.forEach(element => {
        console.log(element.player.name)
        console.log(element.team.name)
        console.log(element.numberOfGoals)
    });
})