import { Module } from '@nestjs/common';
import { CategoriaModule } from './modules/categoria.module';
import { ProdutoModule } from './modules/entity.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Module({
    imports: [CategoriaModule, ProdutoModule, MulterModule.register({
   storage: diskStorage({
     destination: '../uploads',
     filename: (red, file, cb) => {
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
 }),],
})
export class AppModule { }