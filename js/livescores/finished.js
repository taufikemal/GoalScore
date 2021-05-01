const prem = () => {
  fetch(
    "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328"
  )
    .then((response) => response.json())
    .then((data) => {
      let result = data.events;
      result.forEach((element) => {
        console.log(element.strHomeTeam);
        console.log(element.strAwayTeam);
      });
    });
};

const laliga = () => {
    fetch(
        "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4335"
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

const seria = () => {
    fetch(
        "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4332"
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
