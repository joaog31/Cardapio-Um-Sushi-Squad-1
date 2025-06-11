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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProdutoService } from 'src/service/entidade.service';
import Produto from 'src/model/product.entidy';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @Post('up')
  @UseInterceptors(FileInterceptor('img'))
  async criar(
   @Body() body: any,
   @UploadedFile() file: Express.Multer.File): Promise<Produto> {

    const parsed = JSON.parse(body.body)
    const { nome, descricao, preco, categoriaId, status } = parsed;
    const imagem = file.path;
    
    return await this.EntidadeService.criarProduto(nome, descricao, imagem, preco, categoriaId, status);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('img'))
  atualizar(@Param('id') id: string, @Body() body: any, @UploadedFile() img: Express.Multer.File): Promise<Produto> {
    const { nome, descricao, preco, status, categoriaId } = body;
    const imagem = img.path;
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
}