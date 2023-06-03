let axios = require("axios");

let fetchData = async()=>{
    let data = await axios.get("https://cat-fact.herokuapp.com/facts")
    console.log(data.data)
}

fetchData();