import { ProdutoController } from './controllers/product.controller';
import { ProdutoService } from './service/produto.service';
import { ProdutoRepository } from './repository/entity.product';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, ProdutoRepository],
})
export class AppModule {}