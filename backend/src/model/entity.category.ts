import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uid } from 'uuid';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  private id: string;

  @Column()
  private name: string;

  @Column()
  private status: CategoryStatus;

  constructor(name: string, status: CategoryStatus) {
    this.id = uid();
    this.name = name;
    this.status = status;
  }

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getStatus(): CategoryStatus {
    return this.status;
  }
}

export enum CategoryStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}
