import { Module } from '@nestjs/common';
import { EntityController } from '../controllers/entity.controller';
import ProdutoRepository from 'src/repository/entity.product';
import { ProdutoService } from 'src/service/entidade.service';
import { CategoriaModule } from './categoria.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Module({
  imports: [CategoriaModule, MulterModule.register({
   storage: diskStorage({
     destination: './uploads',
     filename: (req, file, cb) => {
       const date = Date.now();
       const ext = extname(file.originalname);
       const oriName = file.originalname.split('.')[0];
       const newFileName = `${date}_${oriName}${ext}`;
       cb(null, newFileName);
     },
   }),
   limits: {
     fileSize: Math.pow(1024, 2) * 10,
   },
 })],
  controllers: [EntityController],
  providers: [
    ProdutoService,
    ProdutoRepository
  ],
  exports: [ProdutoService, ProdutoRepository],
})
export class ProdutoModule { }