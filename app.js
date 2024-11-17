var countrySelect = document.getElementById("Country")
var stateSelect = document.getElementById("State")
var stateCity = document.getElementById("City")


var countryList = [
    {
        "country": "USA",
        "states": [
            {
                "statename": "California",
                "cities": ["Los Angeles", "San Francisco", "San Diego"]
            },
            {
                "statename": "Texas",
                "cities": ["Houston", "Dallas", "Austin"]
            },
            {
                "statename": "New York",
                "cities": ["New York City", "Buffalo", "Rochester"]
            }
        ]
    },
    {
        "country": "India",
        "states": [
            {
                "statename": "Maharashtra",
                "cities": ["Mumbai", "Pune", "Nagpur"]
            },
            {
                "statename": "Karnataka",
                "cities": ["Bangalore", "Mysore", "Mangalore"]
            },
            {
                "statename": "Tamil Nadu",
                "cities": ["Chennai", "Coimbatore", "Madurai"]
            }
        ]
    },
    {
        "country": "Canada",
        "states": [
            {
                "statename": "Ontario",
                "cities": ["Toronto", "Ottawa", "Hamilton"]
            },
            {
                "statename": "British Columbia",
                "cities": ["Vancouver", "Victoria", "Kelowna"]
            },
            {
                "statename": "Quebec",
                "cities": ["Montreal", "Quebec City", "Sherbrooke"]
            }
        ]
    },
    {
        "country": "Australia",
        "states": [
            {
                "statename": "New South Wales",
                "cities": ["Sydney", "Newcastle", "Wollongong"]
            },
            {
                "statename": "Victoria",
                "cities": ["Melbourne", "Geelong", "Ballarat"]
            },
            {
                "statename": "Queensland",
                "cities": ["Brisbane", "Gold Coast", "Cairns"]
            }
        ]
    },
    {
        "country": "UK",
        "states": [
            {
                "statename": "England",
                "cities": ["London", "Manchester", "Birmingham"]
            },
            {
                "statename": "Scotland",
                "cities": ["Edinburgh", "Glasgow", "Aberdeen"]
            },
            {
                "statename": "Wales",
                "cities": ["Cardiff", "Swansea", "Newport"]
            }
        ]
    },
    {
        "country": "Germany",
        "states": [
            {
                "statename": "Bavaria",
                "cities": ["Munich", "Nuremberg", "Augsburg"]
            },
            {
                "statename": "Berlin",
                "cities": ["Berlin", "Potsdam", "Spandau"]
            },
            {
                "statename": "Hesse",
                "cities": ["Frankfurt", "Wiesbaden", "Darmstadt"]
            }
        ]
    },
    {
        "country": "Japan",
        "states": [
            {
                "statename": "Kanto",
                "cities": ["Tokyo", "Yokohama", "Saitama"]
            },
            {
                "statename": "Kansai",
                "cities": ["Osaka", "Kyoto", "Kobe"]
            },
            {
                "statename": "Hokkaido",
                "cities": ["Sapporo", "Hakodate", "Asahikawa"]
            }
        ]
    },
    {
        "country": "Brazil",
        "states": [
            {
                "statename": "São Paulo",
                "cities": ["São Paulo", "Campinas", "Santos"]
            },
            {
                "statename": "Rio de Janeiro",
                "cities": ["Rio de Janeiro", "Niterói", "Petrópolis"]
            },
            {
                "statename": "Bahia",
                "cities": ["Salvador", "Feira de Santana", "Ilhéus"]
            }
        ]
    },
    {
        "country": "South Africa",
        "states": [
            {
                "statename": "Gauteng",
                "cities": ["Johannesburg", "Pretoria", "Soweto"]
            },
            {
                "statename": "Western Cape",
                "cities": ["Cape Town", "Stellenbosch", "George"]
            },
            {
                "statename": "KwaZulu-Natal",
                "cities": ["Durban", "Pietermaritzburg", "Richards Bay"]
            }
        ]
    },
    {
        "country": "Pakistan",
        "states": [
            {
                "statename": "Punjab",
                "cities": ["Lahore", "Faisalabad", "Rawalpindi"]
            },
            {
                "statename": "Sindh",
                "cities": ["Karachi", "Hyderabad", "Sukkur"]
            },
            {
                "statename": "Khyber Pakhtunkhwa",
                "cities": ["Peshawar", "Mardan", "Abbottabad"]
            }
        ]
    }
]



countrySelect.addEventListener("change", function () {
    var state = countryList[countrySelect.value].states
    stateSelect.innerHTML = " <option disabled selected >Select State </option>"
    for (var index in state) {
        console.log(state[index].statename)
        stateSelect.innerHTML += '<option value=' + index + '>' + state[index].statename + '</option>'
    }
})

stateSelect.addEventListener("change", function () {
    var cities = countryList[countrySelect.value].states[stateSelect.value].cities
    stateCity.innerHTML=" <option disabled selected >Select City </option>"
    for(var items of cities){
        console.log(items)
        stateCity.innerHTML+=" <option  >"+items+"</option>"

    }

})

function fetchCountryList() {

    for (var i in countryList) {
        console.log(countryList[i].country)
        countrySelect.innerHTML += `<option value=${i}>${countryList[i].country}</option>`
    }


}

fetchCountryList()