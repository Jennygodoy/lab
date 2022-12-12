import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Codigotrabajo } from '../models';
import { CodigotrabajoRepository } from '../repositories';
export declare class CodigotrabajoController {
    codigotrabajoRepository: CodigotrabajoRepository;
    constructor(codigotrabajoRepository: CodigotrabajoRepository);
    create(codigotrabajo: Omit<Codigotrabajo, 'id'>): Promise<Codigotrabajo>;
    count(where?: Where<Codigotrabajo>): Promise<Count>;
    find(filter?: Filter<Codigotrabajo>): Promise<Codigotrabajo[]>;
    updateAll(codigotrabajo: Codigotrabajo, where?: Where<Codigotrabajo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Codigotrabajo>): Promise<Codigotrabajo>;
    updateById(id: string, codigotrabajo: Codigotrabajo): Promise<void>;
    replaceById(id: string, codigotrabajo: Codigotrabajo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
