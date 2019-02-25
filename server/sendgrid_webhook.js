var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'komentarplatform' }, function(err, tunnel) {
  console.log('LT running');
});
