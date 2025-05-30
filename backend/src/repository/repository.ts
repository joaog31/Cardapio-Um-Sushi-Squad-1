import Categoria from 'src/model/entity.category';

export default class CategoriaRepository {
  private categorias: Categoria[];
  private nextId: number;

  constructor() {
    this.categorias = [];
    this.nextId = 1;
  }

  public findAll(): Categoria[] {
    return this.categorias.filter((c) => c.deletedAt === null);
  }

  public findActive(): Categoria[] {
    return this.categorias.filter((c) => c.status && c.deletedAt === null);
  }

  public findById(id: number): Categoria | undefined {
    return this.categorias.find((c) => c.id === id && c.deletedAt === null);
  }

  public findByNome(nome: string): Categoria | undefined {
    const nomeFormatado = nome.trim().toLowerCase();
    return this.categorias.find(
      (c) =>
        c.nome.trim().toLowerCase() === nomeFormatado && c.deletedAt === null,
    );
  }

  public create(nome: string, status: boolean = true): Categoria {
    const novaCategoria = new Categoria(this.nextId++, nome, status);

    this.categorias.push(novaCategoria);
    return novaCategoria;
  }

  public update(
    id: number,
    nome: string,
    status: boolean,
  ): Categoria | undefined {
    const categoria = this.findById(id);

    if (!categoria) {
      return undefined;
    }

    categoria.nome = nome;
    categoria.status = status;

    return categoria;
  }

  public toggleStatus(id: number): Categoria | undefined {
    const categoria = this.findById(id);

    if (categoria) {
      categoria.status ? categoria.desativar() : categoria.ativar();
    }

    return categoria;
  }

  public delete(id: number): Categoria | undefined {
    const categoria = this.findById(id);

    if (categoria) {
      categoria.deletar();
    }

    return categoria;
  }
}
