import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import type { Server } from 'http';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let requestAgent: any; // usar any aqui evita o erro de tipo
  let server: Server;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    server = app.getHttpServer();
    requestAgent = request(server);
  });

  it('/ (GET)', () => {
    return requestAgent
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
