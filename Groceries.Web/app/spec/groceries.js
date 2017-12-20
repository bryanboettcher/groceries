describe('Greetings Service', function() {

    var subject;

    // establish
    beforeAll(function() { });

    // because
    beforeEach(function () {
        subject = new greetingService();
    });

    // assertion
    it('Should say hello', function() {
        expect(subject.getGreeting()).toBe('hello world from service');
    });

});

describe('Hello World Controller', function() {

    var subject, scope, service;

    beforeEach(function() {

        scope = {};
        service = {
            getGreeting: function () { return 'test greeting'; },
            doVoidMethodThingy: function() { }
        };

        spyOn(service, 'doVoidMethodThingy');

        subject = new helloWorldControllerFunction(scope, service);
    });

    describe('When loading the controller', function() {

        beforeEach(function() {
        });

        it('Should not destroy the scope', function () {
            expect(scope).not.toBeNull();
        });

        it('Should call my void', function() {
            expect(service.doVoidMethodThingy).toHaveBeenCalled();
        });

        it('Should get the greeting', function() {
            expect(scope.greeting).toBe('test greeting');
        });
    });

});