import { Selector } from 'testcafe';

fixture `MenuTest`
    .page `localhost:3000`;

test('MenuPageTest', async t => {
    await t
        .click(Selector('a').withText('Menu'))
        .expect(Selector('h3').withText('Products').textContent).eql("Products");
});

test('AddToCartTest', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('a').withText('Menu'))
        .click(Selector('.button.btn.btn-success').find('[alt="cart"]'))
        .expect(Selector('.scroll').find('div').withText('Pak').nth(1).textContent).eql("Pak1 ฿")
        .click(Selector('.row').nth(11).find('button').withText('1'))
        .expect(Selector('.scroll').find('div').withText('pak2').nth(0).textContent).eql("pak21 ฿");
});