import axios from 'axios';
const fs = require('fs');


function getData (){
    const config = {
        method: 'get',
        url: 'http://127.0.0.1:8080/api/catalog',
        };
    let obj;
    let j = 1;
    let data = [];
    axios(config)
    .then(function (response) {
        console.log(typeof response)
        obj = response.data;
        console.log(JSON.stringify(response.data));
        console.log(obj);
        
        for (const key in obj[0]){
            if (j === 1 ){ continue;}
            data.push({materie:Object.keys(obj[0])[j],nota:obj[0][key]});
            j++;
        }

    })
    .catch(function (error) {
    console.log(error);
    });

}

export default getData;