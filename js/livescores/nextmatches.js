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
      console.log(data.matches);
    });
};

headbrazil()
