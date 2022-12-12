import { Entity } from '@loopback/repository';
export declare class Codigotrabajo extends Entity {
    id?: string;
    antiguedad: number;
    diasotorgados: number;
    vigente: boolean;
    constructor(data?: Partial<Codigotrabajo>);
}
export interface CodigotrabajoRelations {
}
export declare type CodigotrabajoWithRelations = Codigotrabajo & CodigotrabajoRelations;
