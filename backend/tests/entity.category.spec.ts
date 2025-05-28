import { expect } from 'chai';
import { Category, CategoryStatus } from '../src/model/entity.category';

describe('Category Entity', () => {
  let category: Category;

  describe('create a Category with given name and status', () => {
    // Arrange
    beforeEach(() => {
      category = new Category('Fish', CategoryStatus.AVAILABLE);
    });

    // Act
    it('should be an instance of Category', () => {
      // Assert
      expect(category).to.be.an.instanceOf(Category);
    });

    // Assert
    it('should have the correct name and status', () => {
      // Assert
      expect(category.getName()).to.equal('Fish'); // Corrigido: usa getName()
      expect(category.getStatus()).to.equal(CategoryStatus.AVAILABLE); // Corrigido: adiciona ()
    });
  });

  describe('unique id generation', () => {
    let category1: Category;
    let category2: Category;

    // Arrange
    beforeEach(() => {
      category1 = new Category('Fish', CategoryStatus.AVAILABLE);
      category2 = new Category('Vegetarian', CategoryStatus.UNAVAILABLE);
    });

    // Act
    it('should generate a string id', () => {
      // Assert
      expect(category1.getId()).to.be.a('string');
      expect(category2.getId()).to.be.a('string');
    });

    // Assert
    it('should generate unique ids for different categories', () => {
      // Assert
      expect(category1.getId()).to.not.equal(category2.getId());
    });
  });

  describe('status assignment', () => {
    let availableCategory: Category;
    let unavailableCategory: Category;

    // Arrange
    beforeEach(() => {
      availableCategory = new Category('Raw', CategoryStatus.AVAILABLE);
      unavailableCategory = new Category('Fried', CategoryStatus.UNAVAILABLE);
    });

    // Act
    it('should set status to AVAILABLE or UNAVAILABLE', () => {
      // Assert
      expect(availableCategory.getStatus()).to.equal(CategoryStatus.AVAILABLE);
      expect(unavailableCategory.getStatus()).to.equal(CategoryStatus.UNAVAILABLE);
    });
  });
});