     async function fetchCurrencyData() {
        const apiKey = '8033f2da8ce64ec092c6feb6cbef9b01';
        const response = await fetch(`https://api.stlouisfed.org/fred/series/observations?series_id=DEXUSEU&api_key=${apiKey}&file_type=json`);
        const data = await response.json();
        return data;
      }

      async function updateTable() {
        const table = document.querySelector('#currency-table');
        const data = await fetchCurrencyData();
        data.observations.forEach(observation => {
          const row = table.insertRow();
          const dateCell = row.insertCell(0);
          const valueCell = row.insertCell(1);
          dateCell.innerHTML = observation.date;
          valueCell.innerHTML = observation.value;
        });
      }


      window.addEventListener('load', updateTable);
