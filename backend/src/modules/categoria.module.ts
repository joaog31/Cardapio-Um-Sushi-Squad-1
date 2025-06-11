import { Module } from '@nestjs/common';
import { CategoriaController } from '../controllers/categoria.controller';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaRepository } from '../repository/categoria.repository';

@Module({
  imports: [],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaRepository],
  exports: [CategoriaService],
})
export class CategoriaModule { }
