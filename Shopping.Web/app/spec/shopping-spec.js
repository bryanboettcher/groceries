describe('Shopping Controller', function() {

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

        it('Should initialize the newquantity property', function () {
            expect(scope.newquantity).toBeFalsy();
        });

        describe(' :: When adding valid items', function() {
            beforeEach(function () {
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

            describe(' :: When adding a duplicate item', function() {
                beforeEach(function() {
                    scope.addItem('my item', 5);
                });

                it('Should not add a new item', function() {
                    expect(scope.items.length).toBe(1);
                });

                it('Should update the existing item', function() {
                    expect(scope.items[0].quantity).toBe(5);
                });
            });

            describe(' :: When adding a duplicate item in a different case', function () {
                beforeEach(function () {
                    scope.addItem('MY ITEM', 4);
                });

                it('Should not add a new item', function () {
                    expect(scope.items.length).toBe(1);
                });

                it('Should not change the existing item', function () {
                    expect(scope.items[0].name).toBe('my item');
                });

                it('Should update the existing item', function () {
                    expect(scope.items[0].quantity).toBe(4);
                });
            });

            describe(' :: When removing known items', function() {
                beforeEach(function () {
                    scope.removeItem('my item');
                });

                it('Should remove the item', function () {
                    expect(scope.items.length).toBe(0);
                });
            });

            describe(' :: When removing known items with a different casing', function () {
                beforeEach(function () {
                    scope.removeItem('MY ITEM');
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

        describe(' :: When adding item with default name', function() {
            beforeEach(function() {
                scope.addItem('', 1);
            });

            it('Should not add the item', function() {
                expect(scope.items.length).toBe(0);
            });
        });

        describe(' :: When adding item with quantity 0', function () {
            beforeEach(function () {
                scope.addItem('some value', 0);
            });

            it('Should not add the item', function () {
                expect(scope.items.length).toBe(0);
            });
        });

        describe(' :: When adding item with purely whitespace name', function () {
            beforeEach(function () {
                scope.addItem(' ', 1);
            });

            it('Should not add the item', function () {
                expect(scope.items.length).toBe(0);
            });
        });

        describe(' :: When adding item with whitespace in name', function () {
            beforeEach(function () {
                scope.addItem(' spacey name ', 1);
            });

            it('Should add the item', function () {
                expect(scope.items.length).toBe(1);
            });

            it('Should fix the whitespace', function () {
                expect(scope.items[0].name).toBe('spacey name');
            });

            describe(' :: When adding second item with whitespace in the name', function() {
                beforeEach(function() {
                    scope.addItem('spacey name ', 2);
                });

                it('Should not add the item', function () {
                    expect(scope.items.length).toBe(1);
                });

                it('Should not rename the item', function () {
                    expect(scope.items[0].name).toBe('spacey name');
                });

                it('Should update the quantity', function () {
                    expect(scope.items[0].quantity).toBe(2);
                });
            });
        });
    });

});