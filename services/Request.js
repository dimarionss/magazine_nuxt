import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? 'https://api.geekoutevents.io' : 'http://localhost:3000';

export default {
  async klaviyoIdentify(data) {
    let res = await axios.post(api+'/klaviyo/identify', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async klaviyoDubaiQuiz(data) {
    let res = await axios.post(api+'/klaviyo/dubai', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  }
}