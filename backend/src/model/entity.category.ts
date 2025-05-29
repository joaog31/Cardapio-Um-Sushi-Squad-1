export default class Categoria {
  private _id: number;
  private _nome: string;
  private _status: boolean;
  private _deletedAt: Date | null;
  private _nomesExistentes: string[];

  constructor(id: number, nome: string, status: boolean = true, nomesExistentes: string[]) {
    this._id = id;
    this._nome = nome;
    this._status = status;
    this._deletedAt = null;
    this._nomesExistentes = nomesExistentes;
    
    this.validarExist(nomesExistentes);
  }

  get id(): number {
    return this._id;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
    this.validar(novoNome);
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

 
  private validarExist(nomesExistentes: string[]): void {
    if (!this._nome || this._nome.trim().length === 0) {
      throw new Error('Nome da categoria é obrigatório');
    }
  
  }
   private validar(novoNome: string): void {
    if (novoNome.includes(this._nome.trim())) {
      throw new Error('Nome da categoria duplicado');
    }
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