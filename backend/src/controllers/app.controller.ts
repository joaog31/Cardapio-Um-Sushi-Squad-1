import CategoriaRepository from "src/repository/repository";
import Categoria from "src/model/entity.category";

export default class CategoriaController {
  constructor(private repository: CategoriaRepository) {}

  public listarTodas(): Categoria[] {
    return this.repository.findAll();
  }

  public listarAtivas(): Categoria[] {
    return this.repository.findActive();
  }

  public buscarPorId(id: number): Categoria | undefined {
    return this.repository.findById(id);
  }

  public criar(nome: string, status: boolean = true): Categoria {
    return this.repository.create(nome, status);
  }

  public atualizar(id: number, nome: string, status: boolean): Categoria | undefined {
    return this.repository.update(id, nome, status);
  }

  public alternarStatus(id: number): Categoria | undefined {
    return this.repository.toggleStatus(id);
  }

  public remover(id: number): Categoria | undefined {
    return this.repository.delete(id);
  }
}