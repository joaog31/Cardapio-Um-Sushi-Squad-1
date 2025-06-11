import { Module } from '@nestjs/common';
import { EntityController } from '../controllers/entity.controller';
import ProdutoRepository from 'src/repository/entity.product';
import { ProdutoService } from 'src/service/entidade.service';
import { CategoriaModule } from './categoria.module';

@Module({
  imports: [CategoriaModule],
  controllers: [EntityController],
  providers: [
    ProdutoService,
    ProdutoRepository
  ],
  exports: [ProdutoService],
})
export class ProdutoModule { }