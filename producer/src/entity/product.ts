import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    public id: number | undefined;

    @Column()
    public name: string | undefined;

    @Column('decimal', { precision: 10, scale: 2 })
    public price: number | undefined;


    @Column('int')
    public quantity: number | undefined;
}