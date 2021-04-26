fetch('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021')
  .then(response => response.json())
  .then((data)=>{
      let result = data.table;
      result.sort((a,b)=>a.intRank - b.intRank);
      console.log(result)
  });