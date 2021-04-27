fetch('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4332&s=2020-2021')
  .then(response => response.json())
  .then((data)=>{
      let result = data.table;
      result.sort((a,b)=>a.intRank - b.intRank);
      console.log(result)

      let temp = "";
      result.forEach(item => {
          temp += "<tr>"
          temp += `<td>${item.intRank}</td>`
          temp += `<td><img src=${item.strTeamBadge}></td>`
          temp += `<td>${item.strTeam}</td>`
          temp += `<td>${item.intPlayed}</td>`
          temp += `<td>${item.intWin}</td>`
          temp += `<td>${item.intDraw}</td>`
          temp += `<td>${item.intLoss}</td>`
          temp += `<td>${item.intPoints}</td>`
          temp += `<td>${item.strForm}</td></tr>`
          
      });
      document.getElementById("fetch").innerHTML = temp;
  });