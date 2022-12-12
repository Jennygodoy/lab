import { Entity } from '@loopback/repository';
export declare class Vacaciones extends Entity {
    id?: string;
    fecha: string;
    empleadoid: string;
    empleadoId: string;
    constructor(data?: Partial<Vacaciones>);
}
export interface VacacionesRelations {
}
export declare type VacacionesWithRelations = Vacaciones & VacacionesRelations;
