var com;
(function (com) {
    var quikr;
    (function (quikr) {
        var package;
        (function (package) {

            package.HelloService = function (restService) {                               
                this.restService = restService;

                this.sayHello = function () {
                	console.log("Hello package !!! ");
                	return "Hello package !!! ";
                };

                this.getAddress = function(){
                	return this.restService.get("test");
                }

            };

            package.RestService = function(){
            	var baseUrl = "http://ip:port/context";
            	var prepareUrl = function(path){
            		return this.baseUrl + "/"+path;
            	}

            	this.get = function(path, params){
            		var fullUrl = prepareUrl(path);
            		console.log(fullUrl);
            		return fullUrl;	
            	}

            	this.post = function(path, params){

            	}

            	
            }



        })(package = quikr.package || (quikr.package = {}));
    })(quikr = com.quikr || (com.quikr = {}));
})(com || (com = {}));

var restService = new com.quikr.package.RestService();
var helloService = new com.quikr.package.HelloService(restService);
window.onload = helloService.sayHello();