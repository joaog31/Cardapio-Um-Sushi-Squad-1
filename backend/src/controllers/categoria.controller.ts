import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CategoriaService } from '../service/categoria.service';
import Categoria from '../model/categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly service: CategoriaService) { }

  @Get()
  listarTodas(): Categoria[] {
    return this.service.listarAtivas();
  }

  @Get('admin')
  listarTodasAdmin(): Categoria[] {
    return this.service.listarTodas();
  }

  @Get('ativas')
  listarAtivas(): Categoria[] {
    return this.service.listarAtivas();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string): Categoria | undefined {
    return this.service.buscarPorId(Number(id));
  }

  @Post()
  criar(@Body('nome') nome: string): Categoria {
    return this.service.criarCategoria(nome);
  }

  @Put(':id')
  atualizar(
    @Param('id') id: string,
    @Body('nome') nome: string,
    @Body('status') status: boolean,
  ): Categoria {
    return this.service.atualizarCategoria(Number(id), nome, status);
  }

  @Put('status/:id')
  alternarStatus(@Param('id') id: string): Categoria {
    return this.service.alternarStatus(Number(id));
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    try {
      return this.service.remover(Number(id));
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST
      );
    }
  }
}