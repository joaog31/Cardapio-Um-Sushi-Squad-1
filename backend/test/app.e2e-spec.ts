import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let requestAgent: ReturnType<typeof request>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    requestAgent = request(app.getHttpServer());
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return requestAgent
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
