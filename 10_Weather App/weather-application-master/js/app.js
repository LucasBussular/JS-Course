// código de manipulação do DOM:

const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"')
const cityTemperatureContainer = 
    document.querySelector('[data-js="city-temperature"')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]')
let timeIconContainer = document.querySelector('[data-js="time-icon"]')

// checa se o card está com o display none
const showCityCard = () => 
    cityCard.classList.contains('d-none') ? cityCard.classList.remove('d-none') : undefined

// insere os itens no DOM
const insertTextIntoDOM = (DOMItem, content) => DOMItem.textContent = content
const insertHTMLIntoDOM = (DOMItem, content) => DOMItem.innerHTML = content

// faz as requests
const requestDataFromAPI = async (cityName) => {
    
    // pega a chave e o nome da cidade pelo valor do input
    const [{ Key, LocalizedName }] = await getCityData(cityName) 
    // pega as informações sobre o clima da cidade com os dados obtidos acima
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCurrWeather(Key)
    // cria o html a ser inserido no DOM
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`
    
    // checa se é de manhã ou de noite
    timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg' 
    // insere o textContent nos itens do DOM
    insertTextIntoDOM(cityNameContainer, LocalizedName)
    insertTextIntoDOM(cityWeatherContainer, WeatherText)
    insertTextIntoDOM(cityTemperatureContainer, Temperature.Metric.Value)
    insertHTMLIntoDOM(timeIconContainer, timeIcon)
}

cityForm.addEventListener('submit', event => {
    // peg o valor do input
    const inputValue = event.target.city.value
    // evita que a pagina seja recarregada
    event.preventDefault()

    // checa se o card está com o display none
    showCityCard()
    requestDataFromAPI(inputValue)

    cityForm.reset()
})

