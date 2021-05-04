const axios = require('axios');

const apiAxios = axios.create({
    baseURL: 'https://api.smsdev.com.br/v1/'
})

const key_api_smsdev = ""; 

//enviando sms
apiAxios.post('/send', {
    key: key_api_smsdev,
    type: 9,
    number: '',
    msg: 'Test de envio usando SMSDEV'
}).then(response => {
    console.log(response.data);
})