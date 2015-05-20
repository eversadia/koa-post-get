var _ = require('koa-route');
var koa = require('koa');
var app = koa();

var locale = {

  getCountryCode: function * (countryCode) {
    this.set('Content-Type', 'application/json');
    this.set('Access-Control-Allow-Origin', '*');
    if(!countryCode) return 'en';
    this.body = { countycode: countryCode};
  },
  sendCountryCode: function * (countryCode) {
    this.set('Content-Type', 'application/json');
    this.set('Access-Control-Allow-Origin', '*');
    this.body = 200;
    return { countycode: countryCode};
  }
};

app.use(_.get('/locale/:countryCode', locale.getCountryCode));
app.use(_.post('/locale/:countryCode', locale.sendCountryCode));

app.listen(3000);
console.log('listening on port 3000');