export default class Categoria {
  private _id: number;
  private _nome: string;
  private _status: boolean;

  constructor(id: number, nome: string, status = true) {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome da categoria é obrigatório');
    }
    this._id = id;
    this._nome = nome;
    this._status = status;
  }

  get id(): number {
    return this._id;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(novoNome: string) {
    if (!novoNome || novoNome.trim().length === 0) {
      throw new Error('Nome da categoria é obrigatório');
    }
    this._nome = novoNome;
  }

  get status(): boolean {
    return this._status;
  }

  set status(novoStatus: boolean) {
    this._status = novoStatus;
  }

  ativar() {
    this._status = true;
  }

  desativar() {
    this._status = false;
  }
}