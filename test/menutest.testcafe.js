import { Selector } from 'testcafe';

fixture `MenuTest`
    .page `localhost:3000`;

test('AddToCartTest', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('a').withText('Menu'))
        .click(Selector('.row').nth(3).find('button').withText('120'))
        .expect(Selector('.scroll').find('div').withText('The California').nth(1).textContent).eql("The California120 ฿");
});