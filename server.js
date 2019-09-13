var express=require('express');
var bodyparser=require('body-parser');
var fs=require('fs');
var cors=require('cors');

var app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors())

const PORT = 3030;

var server=app.listen(PORT, function () {
    console.log("Server running on " + PORT)
});

var data1=fs.readFileSync('./data/vis_final_market_cap(inflated).json', 'utf8');
var marketCap=JSON.parse(data1);

var data2 = fs.readFileSync('./data/vis_final_w_CO2_emission.json', 'utf8');
var CO2Emission = JSON.parse(data2);

var data3 = fs.readFileSync('./data/combined_btc_elapp.json', 'utf8');
var elAppliances = JSON.parse(data3);

var data4 = fs.readFileSync('./data/vis_final_w_industrial_consumption.json', 'utf8');
var industrialConsuption = JSON.parse(data4);

var data5 = fs.readFileSync('./data/vis_final_max_miner_rev_per_day.json', 'utf8');
var minersRev = JSON.parse(data5);

var data6 = fs.readFileSync('./data/vis_final_raee.json', 'utf8');
var raee = JSON.parse(data6);

app.get('/marketCap', function (req, res) {
    res.json(marketCap)
});

app.get('/CO2Emission', function (req, res) {
    res.json(CO2Emission)
});

app.get('/elAppliances', function (req, res) {
    res.json(elAppliances)
});

app.get('/industrialConsuption', function (req, res) {
    res.json(industrialConsuption)
});

app.get('/raee', function (req, res) {
    res.json(raee)
});

app.get('/minersRev', function (req, res) {
    res.json(minersRev)
});
