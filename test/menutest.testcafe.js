import { Selector } from 'testcafe';

fixture `MenuTest`
    .page `localhost:3000`;

test('OrderMenu', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('.nav.navbar-nav').find('a').withText('Menu'))
        .click(Selector('.row').nth(3).find('button').withText('120'))
        .click(Selector('button').withText('Cart'))
        .click(Selector('button').withText('Check out'))
        .click(Selector('button').withText('Order'))
        .expect(Selector('h2').withText('You will recieve the product less than 30 minutes').textContent).eql("You will recieve the product less than 30 minutes");
});

test('AddCustom', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('.nav.navbar-nav').find('a').withText('Custom'))
        .click(Selector('.ingreMenu').find('div'))
        .click(Selector('.button-container').find('button').withText('Add'))
        .click(Selector('.ingreMenu').find('div').nth(5))
        .click(Selector('.button-container').nth(1).find('button').withText('Add'))
        .click(Selector('button').withText('Add to cart'))
        .click(Selector('p').withText('Cart'))
        .click(Selector('button').withText('Check out'))
        .click(Selector('button').withText('Order'))
        .expect(Selector('h2').withText('You will recieve the product less than 30 minutes').textContent).eql("You will recieve the product less than 30 minutes");
});