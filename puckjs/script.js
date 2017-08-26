NRF.nfcURL("test-uri://login.com/params?site='https://letmeincowrktimisoara.herokuapp.com/'");
NRF.on('NFCon', function() {
  LED1.write(true);
});
NRF.on('NFCoff', function() {
  LED1.write(false);
});
save();
