const APIKey = 'j4xiDSNrv5KMi8PGM3akWv13N6c0hA3V'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>  
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const cityWeatherUrl = (cityKey) => 
    `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error('Não foi possível obter os dados')
        }

        return response.json()
       
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCurrWeather = cityKey => fetchData(cityWeatherUrl(cityKey))


