describe('Menu Management', () => {
  test('should add a new menu item', () => {
    const menu = [];
    menu.push({ name: 'Sushi', price: 10 });
    expect(menu).toHaveLength(1);
    expect(menu[0].name).toBe('Sushi');
  });
});