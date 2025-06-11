import { Module } from '@nestjs/common';
import { CategoriaModule } from './modules/categoria.module';
import { ProdutoModule } from './modules/entity.module';


@Module({
  imports: [CategoriaModule, ProdutoModule],
})
export class AppModule { }