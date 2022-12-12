import { Entity } from '@loopback/repository';
import { Empleado } from './empleado.model';
export declare class Cargo extends Entity {
    id?: string;
    nombre: string;
    empleados: Empleado[];
    constructor(data?: Partial<Cargo>);
}
export interface CargoRelations {
}
export declare type CargoWithRelations = Cargo & CargoRelations;
