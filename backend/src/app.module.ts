import { EntityController } from './controllers/entity.controller';
import { EntidadeService } from './service/entidade.service';
import { EntityReposity } from './repository/entity.product';


@Module({
    imports: [EntityModule],
  controllers: [EntityController],
  providers: [EntidadeService, EntityRepository],
})
export class AppModule {}