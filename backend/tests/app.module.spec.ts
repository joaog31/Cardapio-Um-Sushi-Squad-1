import { expect } from 'chai';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('AppModule', () => {
  let module: TestingModule;

  before(async () => {
    // Arrange
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should compile the module', () => {
    // Act
    const isModuleDefined = module !== undefined;

    // Assert
    expect(isModuleDefined).to.be.true;
  });
});
