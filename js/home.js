const laliga = () => {
  fetch(
    "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4335&s=2020-2021"
  )
    .then((response) => response.json())
    .then((data) => {
      let result = data.table;
      result.sort((a,b)=>a.intRank - b.intRank);
      let maks = 5
      let temp = ""
      for(let i = 0;i<maks;i++){
          temp += "<tr>"
          temp += `<td><img src=${result[i].strTeamBadge} width="30px"></td>`
          temp += `<td>${result[i].strTeam}</td>`
          temp += `<td>${result[i].intPoints}</td></tr>`
      }
      document.getElementById("laligahomestanding").innerHTML = temp;
    });
};
const premierleague = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021"
    )
      .then((response) => response.json())
      .then((data) => {
        let result = data.table;
        result.sort((a,b)=>a.intRank - b.intRank);
        let maks = 5
        let temp = ""
        for(let i = 0;i<maks;i++){
            temp += "<tr>"
            temp += `<td><img src=${result[i].strTeamBadge} width="30px"></td>`
            temp += `<td>${result[i].strTeam}</td>`
            temp += `<td>${result[i].intPoints}</td></tr>`
        }
        document.getElementById("premierleaguehomestanding").innerHTML = temp;
      });
  };
  const ligue1 = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4334&s=2020-2021"
    )
      .then((response) => response.json())
      .then((data) => {
        let result = data.table;
        result.sort((a,b)=>a.intRank - b.intRank);
        let maks = 5
        let temp = ""
        for(let i = 0;i<maks;i++){
            temp += "<tr>"
            temp += `<td><img src=${result[i].strTeamBadge} width="30px"></td>`
            temp += `<td>${result[i].strTeam}</td>`
            temp += `<td>${result[i].intPoints}</td></tr>`
        }
        document.getElementById("ligue1homestanding").innerHTML = temp;
      });
  };
laliga()
premierleague()
ligue1()

const mainnews = ()=>{
  fetch('./js/uefanews.json')
  .then((response) => response.json())
  .then((data)=>{
    let result = data.articles;
    let maks = 3;
    for(let i = 0;i<maks;i++){
      console.log(result[i].author)
      console.log(result[i].title)
      console.log(result[i].publishedAt)
    }
  })
}
mainnews()