import Categoria from "src/model/entity.category";
export default class CategoriaRepository {
  private categorias: Categoria[];
  private nextId: number;
  

  constructor() {
    this.categorias = [];
    this.nextId = 1;
  }

  public findAll(): Categoria[] {
    return this.categorias.filter(categoria => categoria.deletedAt === null);
  }

  public findActive(): Categoria[] {
    return this.categorias.filter(categoria => categoria.status && categoria.deletedAt === null);
  }


  public findById(id: number): Categoria | undefined {
    return this.categorias.find(categoria => categoria.id === id && categoria.deletedAt === null);
  }


  public findByNome(nome: string): Categoria | undefined {
    return this.categorias.find(
      categoria => 
        categoria.nome.toLowerCase() === nome.toLowerCase() && 
        categoria.deletedAt === null);
  }


  public create(nome: string, status: boolean = true): Categoria {
    if (this.findByNome(nome)) {
      throw new Error('Já existe uma categoria com este nome');
    }

  const nomesExistentes: string[] = [];
    for (const cat of this.categorias) {
        nomesExistentes.push(cat.nome.toLowerCase());
}
   const novaCategoria = new Categoria(this.nextId++, nome, status, nomesExistentes);

  this.categorias.push(novaCategoria);
  return novaCategoria;
}


  public update(id: number, nome: string, status: boolean): Categoria | undefined {
    const categoria = this.findById(id);
    
    if (!categoria) {
      return undefined;
    }


    const categoriaComMesmoNome = this.findByNome(nome);
    if (categoriaComMesmoNome && categoriaComMesmoNome.id !== id) {
      throw new Error('Já existe uma categoria com este nome');
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