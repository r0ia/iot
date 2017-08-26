NRF.nfcURL("http://google.com");
NRF.on('NFCon', function() {
  LED1.write(true);
});
NRF.on('NFCoff', function() {
  LED1.write(false);
});
save();