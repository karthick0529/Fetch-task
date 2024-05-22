var res = fetch("https://restcountries.com/v3.1/all");
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
    col.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-header text-center"><h4>${data1[i].name.common}</h4></div>
      <img src="${data1[i].flags.png}" class="card-img-top" alt="Flag of ${
      data1[i].name.common
    }">
      <div class="card-body text-center">
      <p class="card-text"><b>Capital:</b> ${data1[i].capital}</p>
        <p class="card-text"><b>Region:</b> ${data1[i].region}</p>
        <p class="card-text"><b>Latlng:</b> ${data1[i].latlng}</p>
        <p class="card-text"><b>Code:</b> ${
          data1[i].currencies
            ? Object.keys(data1[i].currencies).join(", ")
            : "N/A"
        }</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;

    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}
