import { Injectable } from '@nestjs/common';
import Categoria from '../model/categoria.entity';

@Injectable()
export class CategoriaRepository {
    private categorias: Categoria[] = [];
    private nextId = 1;

    findAll(): Categoria[] {
        return this.categorias;
    }

    findActive(): Categoria[] {
        return this.categorias.filter(categoria => categoria.status);
    }

    findById(id: number): Categoria | undefined {
        return this.categorias.find(categoria => categoria.id === id && categoria.status);
    }

    findByNome(nome: string): Categoria | undefined {
        return this.categorias.find(categoria => categoria.nome.trim().toLowerCase() === nome.trim().toLowerCase() && categoria.status);
    }

    create(nome: string, status: boolean): Categoria {
        const novaCategoria = new Categoria(this.nextId++, nome, status);
        this.categorias.push(novaCategoria);
        return novaCategoria;
    }

    update(id: number, nome: string, status: boolean): Categoria | undefined {
        const categoria = this.findById(id);
        if (categoria) {
            categoria.nome = nome;
            categoria.status = status;
            return categoria;
        }
        return undefined;
    }

    toggleStatus(id: number): Categoria | undefined {
        const categoria = this.findById(id);
        if (categoria) {
            categoria.status ? categoria.desativar() : categoria.ativar();
            return categoria;
        }
        return undefined;
    }

    delete(id: number): Categoria | undefined {
        const categoria = this.findById(id);
        if (categoria) {
            categoria.desativar();
            return categoria;
        }
        return undefined;
    }
}

