// require library
var express=require('express');
var bodyparser=require('body-parser');
var fs=require('fs');
var cors=require('cors');
var path=require('path')

var app=express();
// parser type
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));

// PORT DECLARATION
const PORT = 3030;

// FileSystem, parse JSON file
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

var data7 = fs.readFileSync('./data/vis_final_btc_network_consumption.json', 'utf8');
var btcConsumption = JSON.parse(data7);

// Get call
app.get('/marketCap', function (req, res) {
    res.json(marketCap)
});

app.get('/btcConsumption', function (req, res) {
    res.json(btcConsumption)
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

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// SERVER LISTEN
app.listen(process.env.PORT || 3030);
