import { Module, forwardRef } from '@nestjs/common';
import { CategoriaController } from '../controllers/categoria.controller';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaRepository } from '../repository/categoria.repository';
import { ProdutoModule } from './produto.module';

@Module({
  imports: [forwardRef(() => ProdutoModule)],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaRepository],
  exports: [CategoriaService],
})
export class CategoriaModule { }