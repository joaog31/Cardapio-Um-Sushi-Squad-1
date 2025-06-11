import { Injectable } from '@nestjs/common';
import Produto from 'src/model/product.entidy';
@Injectable()
export default class ProdutoRepository {
  private produtos: Produto[];
  private nextId: number;

  constructor() {
    this.produtos = [];
    this.nextId = 1;
  }

  public findAll(): Produto[] {
    return this.produtos.filter((p) => p.deletedAt === null);
  }

  public findActive(): Produto[] {
    return this.produtos.filter((p) => p.status && p.deletedAt === null);
  }

  public findById(id: number): Produto | undefined {
    return this.produtos.find((p) => p.id === id && p.deletedAt === null);
  }

  public findByNome(nome: string): Produto | undefined {
    const nomeFormatado = nome.trim().toLowerCase();
    return this.produtos.find(
      (p) => p.nome.trim().toLowerCase() === nomeFormatado && p.deletedAt === null
    );
  }

  public create(
    nome: string,
    descricao: string,
    imagem: string,
    preco: number,
    categoriaId: number,
    status: boolean = true
  ): Produto {
    const novoProduto = new Produto(
      this.nextId++,
      nome,
      descricao,
      imagem,
      preco,
      categoriaId,
      status
    );

    this.produtos.push(novoProduto);
    return novoProduto;
  }

  public update(
    id: number,
    nome: string,
    descricao: string,
    imagem: string,
    preco: number,
    categoriaId: number,
    status: boolean
  ): Produto | undefined {
    const produto = this.findById(id);

    if (!produto) {
      return undefined;
    }

    produto.nome = nome;
    produto.descricao = descricao;
    produto.imagem = imagem;
    produto.preco = preco;
    produto.categoriaId = categoriaId;
    produto.status = status;

    return produto;
  }

  public toggleStatus(id: number): Produto | undefined {
    const produto = this.findById(id);

    if (produto) {
      produto.status ? produto.desativar() : produto.ativar();
    }

    return produto;
  }

  public delete(id: number): Produto | undefined {
    const produto = this.findById(id);

    if (produto) {
      produto.deletar();
    }

    return produto;
  }
}