import axios from 'axios';

const axiosWithAuth=()=>{
  const user = localStorage.getItem('user');
  return axios.create({
    baseURL: "https://serkantoraman-twitterproject.onrender.com",
    headers: {
      Authorization:user.token
    }
})
}

export default axiosWithAuth;

//"https://serkantoraman-twitterproject.onrender.com"
//"http://localhost:9000"
//JSON.parse(user).token