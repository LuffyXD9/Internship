const express = require('express');
const router = express.Router();
const axios = require('axios');

var countrydata = "";
var statedata = "";
var citiesdata = "";
var stateFinalData = "";
var cityFinalData = "";

router.get('/', (req, res) => {
    axios.get('https://d32sbion19muhj.cloudfront.net/pub/interview/countries', {
        responseType: 'json'
    })
        .then(response => {
            const data = response.data;
            countrydata = data.data
        })
        .catch(error => {
            console.error(error);
        });

        axios.get('https://d32sbion19muhj.cloudfront.net/pub/interview/states', {
            responseType: 'json'
        })
            .then(response => {
                const data = response.data;
                statedata = data.data;
            })
            .catch(error => {
                console.error(error);
            });

            axios.get('https://d32sbion19muhj.cloudfront.net/pub/interview/cities', {
                responseType: 'json'
            })
                .then(response => {
                    const data = response.data;
                    citiesdata = data.data;
                    res.render('dropdownCountry', { country: countrydata, state: statedata, cities: citiesdata })
                })
                .catch(error => {
                    console.error(error);
                });
});


router.post('/state', (req, res) => {
    console.log(req.body.username)
            stateFinalData = statedata.filter((item) => item.country_id == req.body.username)
            console.log(statedata);
            res.render('dropdownCountry', { country: countrydata, state: stateFinalData, cities: citiesdata })
});

router.post('/state/cities', (req, res) => {
    console.log(req.body.username)
            cityFinalData  = citiesdata.filter((item) => item.state_id == req.body.username)
            console.log(citiesdata);
            res.render('dropdownCountry', { country: countrydata, state: stateFinalData, cities: cityFinalData })
});

module.exports = router;