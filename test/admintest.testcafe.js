import { Selector } from 'testcafe';

fixture `AdminTest`
    .page `http://localhost:3000/admin`
    .httpAuth({
        username: 'test1',
        password: '1234'
    });

test('EditDashBoard', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .expect(Selector('.panel-body').textContent).eql("This is admin panel for amicus salad ")
        .click(Selector('button').withText('Edit'))
        .typeText(Selector('[name="body"]'), 'add test text')
        .click(Selector('button').withText('Save'))
        .expect(Selector('.panel-body').textContent).eql("This is admin panel for amicus salad add test text")
        .click(Selector('button').withText('Edit'))
        .click(Selector('[name="body"]'))
        .pressKey('backspace backspace backspace backspace backspace backspace backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .click(Selector('button').withText('Save'))
        .expect(Selector('.panel-body').textContent).eql("This is admin panel for amicus salad ");
});



test('ChangeUserToAdmin', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .pressKey('enter')
        .click(Selector('.metismenu-item').nth(1).find('a').withText('User'))
        .typeText(Selector('.search'), 'pawan1234')
        .pressKey('enter')
        .click(Selector('button').withText('Edit'))
        .click(Selector('.css-1rtrksz'))
        .click(Selector('.css-v73v8k').withText('Admin'))
        .click(Selector('button').withText('SAVE'))
        .doubleClick(Selector('.search'))
        .typeText(Selector('.search'), 'pawan1234')
        .click(Selector('button').withText('Edit'));
});

test('AddIngredientAndDelete', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('a').withText('Ingredient'))
        .click(Selector('a').withText('Add'))
        .typeText(Selector('[name="name"].form-control'), 'testIngredient')
        .click(Selector('.css-1rtrksz'))
        .click(Selector('#react-select-2-option-0'))
        .typeText(Selector('[name="price"].form-control'), '123')
        .click(Selector('button').withText('Submit'))
        .typeText(Selector('.search'), 'testIngredient')
        .pressKey('enter')
        .expect(Selector('.desc.col-sm-5.col-xs-12').find('div').withText('Page 1 of totals 1').textContent).eql("Page 1 of totals 1, totals 1 rows")
        .click(Selector('button').withText('Delete'))
        .click(Selector('.modal-footer').find('button').withText('Delete'))
        .typeText(Selector('.search'), 'testIngredient')
        .pressKey('enter')
        .expect(Selector('.desc.col-sm-5.col-xs-12').find('div').withText('Page 1 of totals 0').textContent).eql("Page 1 of totals 0, totals 0 rows");
});

test('DeleteAccount', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('.metismenu-item').nth(1).find('a').withText('User'))
        .typeText(Selector('.search'), 'test1')
        .click(Selector('button').withText('Delete'))
        .click(Selector('.search'))
        .typeText(Selector('.search'), 'test1')
        .expect(Selector('.desc.col-sm-5.col-xs-12').find('div').withText('Page 1 of totals 0').textContent).eql("Page 1 of totals 0, totals 0 rows");
});

test('ChangeFromAdminToUser', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('.metismenu-item').nth(1).find('a').withText('User'))
        .typeText(Selector('.search'), 'pawan1234')
        .click(Selector('button').withText('Edit'))
        .click(Selector('.css-1rtrksz'))
        .click(Selector('#react-select-2-option-0'))
        .click(Selector('button').withText('SAVE'))
        .typeText(Selector('.search'), 'pawan1234')
        .click(Selector('button').withText('Edit'))
        .expect(Selector('.css-1rtrksz').textContent).eql("User");
});