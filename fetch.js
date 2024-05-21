var res = fetch(
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
res
  .then((data) => {
    return data.json();
  })
  .then((data1) => foo(data1))
  .catch((error) => console.log(error));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(data1) {
  for (var i = 0; i < data1.length; i++) {
    var col = document.createElement("div");
    col.className = "col-lg-4";
    col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${data1[i].name}</div>
        <div class="card-body text-primary">
         
          <p class="card-text"><b>Capital:</b> ${data1[i].capital}</p>
          <p class="card-text"><b>Region:</b> ${data1[i].region}</p>
          <p class="card-text"><b>Code:</b> ${data1[i].currencies.map(currency => currency.code).join(', ')}</p>
          
        </div>`;

    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}
