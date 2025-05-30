import CategoriaRepository from "src/repository/repository";
import Categoria from "src/model/entity.category";

export default class CategoriaService {
  constructor(private repository: CategoriaRepository) { }

  public criarCategoria(nome: string): Categoria {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome da categoria é obrigatório');
    }
    if (this.repository.findByNome(nome)) {
      throw new Error(`Já existe uma categoria com o nome "${nome.trim()}"`);
    }
    return this.repository.create(nome.trim(), true);
  }


  public atualizarCategoria(id: number, nome: string, status: boolean): Categoria {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome da categoria é obrigatório');
    }

    const existente = this.repository.findByNome(nome);
    if (existente && existente.id !== id) {
      throw new Error(`Já existe uma categoria com o nome "${nome.trim()}"`);
    }
    const categoria = this.repository.update(id, nome.trim(), status);
    if (!categoria) {
      throw new Error(`Categoria com ID ${id} não encontrada`);
    }
    return categoria;

  }
}

