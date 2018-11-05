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

test('AddIngredient', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('a').withText('Ingredient'))
        .click(Selector('.metismenu-item').nth(4).find('a').withText('Add'))
        .typeText(Selector('[name="name"].form-control'), 'ingredient5')
        .click(Selector('.css-1rtrksz'))
        .click(Selector('.css-v73v8k').withText('Meat'))
        .typeText(Selector('[name="description"].form-control'), 'ingredient5')
        .typeText(Selector('[name="price"].form-control'), '5')
        .click(Selector('button').withText('Submit'))
        .typeText(Selector('.search'), 'ingredient5')
        .pressKey('enter')
        .expect(Selector('td').withText('ingredient5').nth(0).textContent).eql("ingredient5")
        .expect(Selector('td').withText('ingredient5').nth(1).textContent).eql("ingredient5")
        .expect(Selector('td').withText('5').nth(2).textContent).eql("5")
        .expect(Selector('td').withText('meat').textContent).eql("meat");
});

test('DeleteIngredient', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('a').withText('Ingredient'))
        .click(Selector('.metismenu-item').nth(3).find('a').withText('View'))
        .typeText(Selector('.search'), 'ingredient5')
        .click(Selector('button').withText('Delete'))
        .click(Selector('.modal-footer').find('button').withText('Delete'))
        .typeText(Selector('.search'), 'ingredient5')
        .expect(Selector('.desc.col-sm-5.col-xs-12').find('div').withText('Page 1 of totals 0').textContent).eql("Page 1 of totals 0, totals 0 rows");
});

test('AddProduct', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .pressKey('enter')
        .click(Selector('a').withText('Products'))
        .click(Selector('.metismenu-item').nth(7).find('a').withText('Add'))
        .typeText(Selector('[name="name"].form-control'), 'product1')
        .typeText(Selector('[name="price"].form-control'), '1')
        .typeText(Selector('[name="description"].form-control'), 'product1')
        .click(Selector('.css-1492t68'))
        .click(Selector('.css-1492t68'))
        .click(Selector('button').withText('Submit'))
        .typeText(Selector('.search'), 'product1')
        .expect(Selector('td').withText('product1').nth(0).textContent).eql("product1")
        .expect(Selector('td').withText('product1').nth(1).textContent).eql("product1")
        .expect(Selector('td').withText('1').nth(2).textContent).eql("1")
        .expect(Selector('.table.table-hover.table-striped').find('tbody').find('tr').find('td').nth(3).textContent).eql("[]");
});

test('DeleteProduct', async t => {
    await t
        .typeText(Selector('#username'), 'pawan1234')
        .typeText(Selector('#password'), '123456789')
        .click(Selector('button').withText('Submit'))
        .click(Selector('a').withText('Products'))
        .click(Selector('.metismenu-item').nth(6).find('a').withText('View'))
        .typeText(Selector('.search'), 'product1')
        .click(Selector('button').withText('Delete'))
        .click(Selector('.modal-footer').find('button').withText('Delete'))
        .typeText(Selector('.search'), 'product1')
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