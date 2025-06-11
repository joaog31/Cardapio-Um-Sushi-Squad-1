import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Param,
  Body,
  HttpException,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { ProdutoService } from 'src/service/entidade.service';
import Produto from 'src/model/product.entidy';

@Controller('produtos')
export class EntityController {
  constructor(private readonly EntidadeService: ProdutoService) {}

  @Get()
  listarTodos(): Produto[] {
    return this.EntidadeService.listarTodos();
  }

  @Get('ativos')
  listarAtivos(): Produto[] {
    return this.EntidadeService.listarAtivos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string): Produto {
    const produto = this.EntidadeService.buscarPorId(Number(id));
    if (!produto) {
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
    }
    return produto;
  }

  @Post()
  async criar(@Body() body: any): Promise<Produto> {
    const { nome, descricao, imagem, preco, categoriaId, status } = body;
    return await this.EntidadeService.criarProduto(nome, descricao, imagem, preco, categoriaId, status);
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() body: any): Promise<Produto> {
    const { nome, descricao, imagem, preco, status, categoriaId } = body;
    return this.EntidadeService.atualizarProduto(
      Number(id),
      nome,
      descricao,
      imagem,
      preco,
      status,
      categoriaId
    );
  }

  @Patch(':id/status')
  alternarStatus(@Param('id') id: string): Produto {
    return this.EntidadeService.alternarStatus(Number(id));
  }
  @Delete(':id')
  remover(@Param('id') id: string): Produto {
    const produto = this.EntidadeService.remover(Number(id));
    if (!produto) {
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
    }
    return produto;
  }
//
//  @Get('deletados')
//  listarDeletados(): Produto[] {
//    return this.EntidadeService.listarDeletados();
//  }
//
//  @Post(':id/restaurar')
//  restaurar(@Param('id') id: string): Produto {
//    const produto = this.EntidadeService.restaurarProduto(Number(id));
//    if (!produto) {
//      throw new HttpException('Produto não encontrado ou não está deletado', HttpStatus.NOT_FOUND);
//    }
//    return produto;
//  }
}