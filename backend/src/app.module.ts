import { Module } from '@nestjs/common';
import { CategoriaModule } from './modules/categoria.module';

@Module({
    imports: [CategoriaModule],
})
export class AppModule { }