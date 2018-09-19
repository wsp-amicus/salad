import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `http://localhost:3000/`;

test('RegisterTest', async t => {
    await t
        .click(Selector('a').withText('Register'))
        .typeText(Selector('#firstname'), 'test1')
        .typeText(Selector('#lastname'), 'test1')
        .typeText(Selector('#email'), 'test1@gmail.com')
        .typeText(Selector('#username'), 'test1')
        .typeText(Selector('div').withText('Password').nth(5).find('.form-control'), '1234')
        .typeText(Selector('div').withText('Confirm password').nth(5).find('.form-control'), '1234')
        .click(Selector('button').withText('Submit'))
        .typeText(Selector('#username'), 'test1')
        .typeText(Selector('#password'), '1234')
        .click(Selector('button').withText('Submit'))
        .expect(Selector('a').withText('test1').textContent).eql("test1");
});

test('LoginTest', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .pressKey('enter')
        .expect(Selector('a').withText('pawan1234').textContent).eql("pawan1234");
});

test('HomeTest', async t => {
    await t
        .click(Selector('[alt="logo"]'))
        .expect(Selector('h1').withText('Amicus').textContent).eql("Amicus");
});

test('RegisterPageTest', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .expect(Selector('h1').withText('Login').textContent).eql("Login");
});

test('LoginPageTest', async t => {
    await t
        .click(Selector('a').withText('Register'))
        .expect(Selector('h1').withText('Register').textContent).eql("Register");
});