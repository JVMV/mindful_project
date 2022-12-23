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
          topics: 'holidays'
        }
      }).then(res => {
        const fetchedImages = res.data;
        setState(fetchedImages)
      }).catch(error => {
        console.log(error);
      })
}

const fetchWeather = (setState) => {
    return;
}

export {
    fetchBackgroundImages,
    fetchWeather
}