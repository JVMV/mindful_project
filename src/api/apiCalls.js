import axios from 'axios';

const fetchBackgroundImages = (setState) => {
    axios({
        method: 'GET',
        baseURL: 'https://api.unsplash.com',
        url: '/photos/random',
        headers: {
          Authorization: 'Client-ID HGoZgqrRarcGJdxcrfbTVXQNXb7XgxBx1GPBdD2W-Eg'
        },
        params: {
          orientation: 'landscape',
          count: 5,
          topics: 'christmas lights'
        }
      }).then(res => {
        const fetchedImages = res.data;
        setState(fetchedImages)
      }).catch(error => {
        console.log(error);
      })
}

const fetchWeather = (setState) => {
    axios({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?',
        params: {
            lat: '36.17',
            lon: '115.13',
            units: 'imperial',
            appid: '408b8b6168b4afe627ffbbc7488b3991'
        }
    }).then(res => {
        console.log(res.data)
        setState(res.data)
    }).catch(error => {
        console.log(error.message)
    })
}

const fetchQuote = (setState) => {
    axios({
        method: 'GET',
        baseURL: 'https://quotes.rest',
        url: '/qod'
    }).then(res => {
        setState(res.data)
    }).catch(error => {
        console.log(error.message)
    })
}

export {
    fetchBackgroundImages,
    fetchWeather,
    fetchQuote
}