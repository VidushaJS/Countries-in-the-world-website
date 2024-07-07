let tblCountries = document.getElementById("tblCountries");

let tableBody = `<tr>
                    <th class="text-center fw-bold">Country</th>
                    <th class="text-center fw-bold">Flag</th>
                </tr>`;

fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then(data => {
    data.forEach(element => {
        tableBody += `<tr>
                        <td>
                            <h2>${element.name.common}</h2>
                            <br>
                            <p>Official Name : ${element.name.official}</p>
                            <p>Region : ${element.region}</p>
                            <p>Capital : ${element.capital}</p>
                            <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Map</a>
                        </td>
                        <td><img src="${element.flags.png}"></td>
                    </tr> `;
        //console.log(element.name.common);
    });
    tblCountries.innerHTML = tableBody;
    //console.log(element);
});

// console.log(element);
//console.log(tableBody);
//tblCountries.innerHTML = tableBody;

function searchCountry() {
    
    let userInput = document.getElementById("txtInput").value;
    let countryFlag = document.getElementById("countryFlag");
    let countryData = document.getElementById("countryData");
    let cancelBtn = document.getElementById("cancelBtn");

    if (userInput === "") {
        countryFlag.innerHTML = null;
        countryData.innerHTML = null;
    } else {
        countryData.style.display
        fetch(`https://restcountries.com/v3.1/name/${userInput}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(obj => {
                countryFlag.innerHTML = `<img class="img-thumbnail" id="flagImg" src=${obj.flags.png} alt="flag">`
                countryData.innerHTML = `<h2>${obj.name.common}</h2>
                                        <p>Official Name : ${obj.name.official}</p>
                                        <p>Region : ${obj.region}</p>
                                        <p>Capital : ${obj.capital}</p>`
                cancelBtn.innerHTML = `<button type="button" class="btn btn-danger ms-5" onclick="cancelSearch()">X</button>`;
                // flagImg.src = obj.flags.png;
                // name.innerText += obj.name.common;
                // officialName.innerText += obj.name.official;
                // region.innerText +=  obj.region;
                // capital.innerText += obj.capital;
            });
        });
    }
    // let flagImg = document.getElementById("flagImg");
    // let name = document.getElementById("name");
    // let officialName = document.getElementById("officialName");
    // let region = document.getElementById("region");
    // let capital = document.getElementById("capital");
    
}

function cancelSearch() {
    countryFlag.innerHTML = null;
    countryData.innerHTML = null;
    cancelBtn.innerHTML = null;
    document.getElementById("txtInput").value = null;
}