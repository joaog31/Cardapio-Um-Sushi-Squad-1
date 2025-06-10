import { Module } from '@nestjs/common';
import { EntityController } from '../controllers/entity.controller';
import { EntidadeService } from '../service/entidade.service';
import { EntityRepository } from '../repository/entity.product';
import { EntidadeService } from '../service/entidade.service';
import { EntityRepository } from '../repository/entity.product'; 

@Module({
  imports: [EntityModule],
  controllers: [EntityController],
  providers: [
    EntityRepository,
    EntidadeService,
  ],
  exports: [EntidadeService],
})
export class EntityModule { }