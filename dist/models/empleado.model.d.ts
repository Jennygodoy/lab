import { Entity } from '@loopback/repository';
import { Vacaciones } from './vacaciones.model';
export declare class Empleado extends Entity {
    id?: string;
    nombre: string;
    fechaingreso: string;
    cargo: string;
    disponible: boolean;
    cargoId: string;
    vacaciones: Vacaciones[];
    constructor(data?: Partial<Empleado>);
}
export interface EmpleadoRelations {
}
export declare type EmpleadoWithRelations = Empleado & EmpleadoRelations;
