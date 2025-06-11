import { Injectable } from '@nestjs/common';
import { CategoriaRepository } from '../repository/categoria.repository';
import Categoria from '../model/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(private readonly repository: CategoriaRepository) { }

  listarTodas(): Categoria[] {
    return this.repository.findAll();
  }

  listarAtivas(): Categoria[] {
    return this.repository.findActive();
  }

  buscarPorId(id: number): Categoria | undefined {
    return this.repository.findById(id);
  }

  criarCategoria(nome: string): Categoria {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome da categoria é obrigatório');
    }
    if (this.repository.findByNome(nome)) {
      throw new Error(`Já existe uma categoria com o nome "${nome.trim()}"`);
    }
    return this.repository.create(nome.trim(), true);
  }

  atualizarCategoria(id: number, nome: string, status: boolean): Categoria {
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

  alternarStatus(id: number): Categoria {
    const categoria = this.repository.toggleStatus(id);
    if (!categoria) throw new Error(`Categoria com ID ${id} não encontrada`);
    return categoria;
  }

  remover(id: number): Categoria {
    const categoria = this.repository.delete(id);
    if (!categoria) throw new Error(`Categoria com ID ${id} não encontrada`);
    return categoria;
  }
}
