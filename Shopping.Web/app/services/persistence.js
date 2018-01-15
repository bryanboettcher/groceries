
// no dependencies yet
function fakePersistenceService() {

    return {
        save: function (data) { },
        load: function () {
            return [
                { name: 'beef', quantity: 5 },
                { name: 'cheese', quantity: 3 },
                { name: 'eggs', quantity: 12 },
                { name: 'kale', quantity: 1 }
            ];
        }
    };
}

function apiPersistenceService() {
    return {
        save: function (data) { },
        load: function() { return []; }
    }
}