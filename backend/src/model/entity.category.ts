export default class Categoria {
  private _id: number;
  private _nome: string;
  private _status: boolean;
  private _deletedAt: Date | null;

  constructor(id: number, nome: string, status: boolean = true) {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome da categoria é obrigatório');
    }

    this._id = id;
    this._nome = nome;
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
      throw new Error('Nome da categoria é obrigatório');
    }
    this._nome = novoNome;
  }

  set status(novoStatus: boolean) {
    this._status = novoStatus;
  }

  get status(): boolean {
    return this._status;
  }

  get deletedAt(): Date | null {
    return this._deletedAt;
  }

  public ativar(): void {
    this._status = true;
    this._deletedAt = null;
  }

  public desativar(): void {
    this._status = false;
  }

  public deletar(): void {
    this._status = false;
    this._deletedAt = new Date();
  }

  public restaurar(): void {
    this._status = true;
    this._deletedAt = null;
  }
}
