describe('Menu Management', () => {
  test('should add a new menu item', () => {
    const menu = [];
    menu.push({ name: 'Sushi', price: 10 });
    menu.push({ name: 'Sashimi', price: 20 });
    expect(menu).toHaveLength(2);
    expect(menu[0].name).toBe('Sushi');
    expect(menu[1].name).toBe('Sashimi');
  });
});