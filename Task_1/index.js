const axios =require('axios');

async function fetchDataFromAPI(){
    try{
        const response = await axios.get('https://catfact.ninja/fact');
        console.log(response.data);
    }
    catch(error){
        console.error('Error happens in fetching data: ', error);

    }
}

fetchDataFromAPI();