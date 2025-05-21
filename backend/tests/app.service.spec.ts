import { expect } from 'chai';
import { AppService } from '../src/app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    // Arrange
    service = new AppService();
  });

  it('should return Hello World!', () => {
    // Act
    const result = service.getHello();

    // Assert
    expect(result).to.equal('Hello World!');
  });
});
