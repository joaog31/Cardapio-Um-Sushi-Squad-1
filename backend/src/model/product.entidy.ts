export default class Produto {
  private _id: number;
  private _nome: string;
  private _descricao: string;
  private _imagem: string;
  private _preco: number;
  private _status: boolean;
  private _categoriaId: number;
  private _deletedAt: Date|null;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    imagem: string,
    preco: number,
    categoriaId: number,
    status: boolean = true
  ) {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome do produto é obrigatório');
    }

    if (!descricao || descricao.trim().length === 0) {
      throw new Error('Descrição do produto é obrigatória');
    }

    if (!imagem || imagem.trim().length === 0) {
      throw new Error('Imagem do produto é obrigatória');
    }

    if (preco <= 0) {
      throw new Error('Preço do produto deve ser maior que zero');
    }

    if (!categoriaId || categoriaId <= 0) {
      throw new Error('Categoria do produto é obrigatória');
    }

    this._id = id;
    this._nome = nome;
    this._descricao = descricao;
    this._imagem = imagem;
    this._preco = preco;
    this._categoriaId = categoriaId;
    this._status = status;
    this._deletedAt = null;
  }

  get id(): number {
    return this._id;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(novoNome: string) {
    if (!novoNome || novoNome.trim().length === 0) {
      throw new Error('Nome do produto é obrigatório');
    }
    this._nome = novoNome;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(novaDescricao: string) {
    if (!novaDescricao || novaDescricao.trim().length === 0) {
      throw new Error('Descrição do produto é obrigatória');
    }
    this._descricao = novaDescricao;
  }

  get imagem(): string {
    return this._imagem;
  }

  set imagem(novaImagem: string) {
    if (!novaImagem || novaImagem.trim().length === 0) {
      throw new Error('Imagem do produto é obrigatória');
    }
    this._imagem = novaImagem;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(novoPreco: number) {
    if (novoPreco <= 0) {
      throw new Error('Preço do produto deve ser maior que zero');
    }
    this._preco = novoPreco;
  }

  get status(): boolean {
    return this._status;
  }

  set status(novoStatus: boolean) {
    this._status = novoStatus;
  }

  get categoriaId(): number {
    return this._categoriaId;
  }

  set categoriaId(novaCategoriaId: number) {
    if (!novaCategoriaId || novaCategoriaId <= 0) {
      throw new Error('Categoria do produto é obrigatória');
    }
    this._categoriaId = novaCategoriaId;
  }

  get deletedAt(): Date|null {
    return this._deletedAt;
  }

  public ativar(): void {
    this._status = true;
    this._deletedAt = null;
  }

  public desativar(): void {
    this._status = false;
    this._deletedAt = new Date();
  }

  public deletar(): void {
    this._status = false;
    this._deletedAt = new Date();
  }

  public restaurar(): void {
    this._status = true;
    this._deletedAt = null;
  }

  public estaDeletado (): boolean {
    return this._deletedAt !== null;
  }
}