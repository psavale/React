import { AddTwoNumbers } from '../shared/utility'

test('adds 1 + 2 to equal 3', () => {
    expect(AddTwoNumbers(1, 2)).toBe(3);
});

//  expect('team').not.toMatch(/I/);  compares string to regular expression 

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

//check if an array or iterable contains a particular item using toContain
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});


//callbacks: Jest will wait until the done callback is called before finishing
//By default, Jest tests complete once they reach the end of their execution
test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

//Promises :Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.


//Async/Await:

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});