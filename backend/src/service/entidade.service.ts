import { Injectable } from '@nestjs/common';
import Produto from 'src/model/product.entidy';
import { CategoriaService } from './categoria.service';
import ProdutoRepository from 'src/repository/entity.product';

@Injectable()
export class ProdutoService {
  constructor(
    private readonly repository: ProdutoRepository,
    private readonly categoriaService: CategoriaService
  ) {}

  listarTodos(): Produto[] {
    return this.repository.findAll();
  }

  listarAtivos(): Produto[] {
    return this.repository.findActive();
  }

  buscarPorId(id: number): Produto | undefined {
    return this.repository.findById(id);
  }

  async criarProduto(
    nome: string,
    descricao: string,
    imagem: string,
    preco: number,
    categoriaId: number,
    status
  ): Promise <Produto> {
    if (!nome?.trim()) throw new Error('Nome é obrigatório');
    if (!descricao?.trim()) throw new Error('Descrição é obrigatória');
    if (!imagem?.trim()) throw new Error('Imagem é obrigatória');
    if (preco <= 0) throw new Error('Preço deve ser maior que zero');

    const categoria = await this.categoriaService.buscarPorId(categoriaId);
    if (!categoria) throw new Error('Categoria invalida ou inexistente');
    if (!categoria.status) throw new Error('Categoria esta desativada');

    return this.repository.create(nome, descricao,imagem,preco,categoriaId,status);
  }

 async atualizarProduto(
    id: number,
    nome: string,
    descricao: string,
    imagem: string,
    preco: number,
    status: boolean,
    categoriaId: number

  ):Promise <Produto> {
    if (!nome?.trim()) throw new Error('Nome e obrigatorio');
    if (!descricao?.trim()) throw new Error('Descricao e obrigatoria');
    if (!imagem?.trim()) throw new Error('Imagem e obrigatoria');
    if (preco <= 0) throw new Error('Preco deve ser maior que zero');

    const categoria = this.categoriaService.buscarPorId(categoriaId);
    if (!categoria) throw new Error('Categoria invalida ou inexistente');
    if (!categoria.status) throw new Error('Categoria esta desativada');


    const produto = this.repository.update(id,nome,descricao,imagem,preco,categoriaId,status);

    if (!produto) throw new Error(`Produto com ID ${id} nao encontrado`);
    return produto;
  }

  alternarStatus(id: number): Produto {
    const produto = this.repository.toggleStatus(id);
    if (!produto) throw new Error(`Produto com ID ${id} nao encontrado`);
    return produto;
  }
   remover(id: number): Produto { 
    const produto = this.repository.delete(id);
    if (!produto) throw new Error(`Produto com ID ${id} nao encontrado`);
    return produto;
  }

 //public listarDeletados(): Produto[] {
 //  return this.repository.findDeleted();
 //} 
 //
 // public restaurarProduto(id: number): Produto {
 //   const produto = this.repository.restore(id);
 //   if (!produto) throw new Error(`Produto com ID ${id} nao encontrado ou nao esta deletado`);
 //   return produto;
 // }
}
