var login = {
   expiry:6,
   loginApi: "/app/api/login/login",
   validateTokenApi: "/app/api/login/validateToken"
};

var wssConfig = ["wsClientProvider",function (wsClientProvider) {
    wsClientProvider.setPublishChannel("requestChannel");
    var subscribeChannels = ["responseChannel"]
    wsClientProvider.setSubscribeChannel(subscribeChannels);
    wsClientProvider.setBaseUrl("wss://api-convergia.scriptrapps.io");
}];

var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
}]





