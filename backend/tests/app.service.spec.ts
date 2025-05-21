import { expect } from 'chai';
import { AppService } from '../src/app.service';

describe('AppService', () => {
  const service = new AppService();

  it('should return Hello World!', () => {
    const result = service.getHello();
    expect(result).to.equal('Hello World!');
  });
});
