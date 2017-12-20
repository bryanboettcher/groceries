describe('Hello World Controller', function() {

    var subject, scope;

    beforeEach(function() {
        scope = {};
        subject = new shoppingController(scope);
    });

    describe(' :: When loading the controller', function() {
        
        it('Should create an empty items array', function() {
            expect(scope.items).not.toBeNull();
        });

        it('Should initialize the newname property', function() {
            expect(scope.newname).toBeFalsy();
        });

        describe(' :: When adding items', function() {
            beforeEach(function () {
                scope.newname = 'my item';
                scope.addItem('my item', 3);
            });

            it('Should add a single item', function () {
                expect(scope.items.length).toBe(1);
            });

            it('Should add the right name', function () {
                expect(scope.items[0].name).toBe('my item');
            });

            it('Should add the right quantity', function () {
                expect(scope.items[0].quantity).toBe(3);
            });

            it('Should blank the newname property', function () {
                expect(scope.newname).toBeFalsy();
            });

            describe(' :: When removing known items', function() {
                beforeEach(function () {
                    scope.removeItem('my item');
                });

                it('Should remove the item', function () {
                    expect(scope.items.length).toBe(0);
                });
            });

            describe(' :: When removing unknown items', function () {
                beforeEach(function() {
                    scope.removeItem('some item');
                });

                it('Should not remove the item', function() {
                    expect(scope.items.length).toBe(1);
                });
            });
        });

    });

});