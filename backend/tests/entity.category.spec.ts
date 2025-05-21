import { expect } from 'chai';
import { Category, CategoryStatus } from '../src/model/entity.category';
import 'reflect-metadata';

describe('Category Entity', () => {
  it('should create a Category with given name and status', () => {
    const category = new Category('Fish', CategoryStatus.AVAILABLE);
    expect(category).to.be.an.instanceOf(Category);
    expect((category as any).name).to.equal('Fish');
    expect((category as any).status).to.equal(CategoryStatus.AVAILABLE);
  });

  it('should generate a unique id for each Category', () => {
    const category1 = new Category('Fish', CategoryStatus.AVAILABLE);
    const category2 = new Category('Vegetarian', CategoryStatus.UNAVAILABLE);
    expect((category1 as any).id).to.be.a('string');
    expect((category2 as any).id).to.be.a('string');
    expect((category1 as any).id).to.not.equal((category2 as any).id);
  });

  it('should set status to AVAILABLE or UNAVAILABLE', () => {
    const availableCategory = new Category('Raw', CategoryStatus.AVAILABLE);
    const unavailableCategory = new Category('Fried', CategoryStatus.UNAVAILABLE);
    expect((availableCategory as any).status).to.equal('AVAILABLE');
    expect((unavailableCategory as any).status).to.equal('UNAVAILABLE');
  });
});