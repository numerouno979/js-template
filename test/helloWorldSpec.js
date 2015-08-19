describe("spy usage guidelines", function () {

    describe("spyOn", function () {
        it("is used to spy on interactions of code under test with existing objects",

        function () {
            // Source
            var foo = function () {
                console.log('Hello World');
            };

            // Test
            spyOn(console, 'log');
            foo();
            expect(console.log).toHaveBeenCalledWith('Hello World');
        });
    });

    describe("createSpy", function () {
        it("is used for functions called by the code under test with no return value, usually callbacks",

        function () {
            // Source
            var foo = function (callback) {
                callback('Hello World');
            };

            // Test
            var callbackSpy = jasmine.createSpy('spy name');
            foo(callbackSpy);
            expect(callbackSpy).toHaveBeenCalledWith('Hello World');
        });
    });

    describe("createSpyObj", function () {
        it("is used interactions of code under test with dependencies, usually other classes",

        function () {
            // Source
            var foo = function (bar) {
                var x = bar.getWidth();
                if (x > 10) {
                    bar.setHeight(x);
                }
            }

            // Test
            var barSpy = jasmine.createSpyObj('spy name', ['getWidth', 'setHeight']);
            barSpy.getWidth.andReturn(5);
            foo(barSpy);
            expect(barSpy.getWidth).toHaveBeenCalled();
            expect(barSpy.setHeight).not.toHaveBeenCalled();

            barSpy.getWidth.andReturn(100);
            foo(barSpy);
            expect(barSpy.getWidth).toHaveBeenCalled();
            expect(barSpy.setHeight).toHaveBeenCalledWith(100);
        });
    });



    describe("test hello service using rest service SpyObj", function () {
        it("is used to get address",

        function () {

            var restServiceSpy = jasmine.createSpyObj('spy', ['get']);
            restServiceSpy.get.andReturn("W8");
            var helloService = new com.quikr.package.HelloService(restServiceSpy);
            expect(helloService.getAddress()).toBe("W8");

            
        });

        it("is used to say hello",

        function () {

            var restServiceSpy = jasmine.createSpyObj('spy', ['get']);
            restServiceSpy.get.andReturn("W8");
            var helloService = new com.quikr.package.HelloService(restServiceSpy);
            expect(helloService.sayHello()).toContain("Hello");

            
        });
    });

    describe("test restService", function () {
        it("is used to call rest api",

        function () {

            var restService = new com.quikr.package.RestService();
            var path = "path/path1";
            expect(restService.get(path, null)).toContain(path);
            
        });
    });

});

