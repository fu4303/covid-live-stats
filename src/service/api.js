import axios from 'axios';

const apiClient = axios.create({
    baseURL:'https://covid19.mathdro.id/api',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
});

const fetchStats = (countryName) => {
    return apiClient.get(`/countries/${countryName}`)
};

const fetchCountriesStats = () => {
    return apiClient.get('https://www.trackcorona.live/api/countries/', {
        withCredentials:false,
        headers:{
            Accept:'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
};

const fetchGlobalStats = () => {
    return apiClient.get('/')
};

export  {
    fetchStats,
    fetchGlobalStats,
    fetchCountriesStats
}

//https://covid19.mathdro.id/api
