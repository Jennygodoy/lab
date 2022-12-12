import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Vacaciones } from '../models';
import { VacacionesRepository } from '../repositories';
export declare class VacacionesController {
    vacacionesRepository: VacacionesRepository;
    constructor(vacacionesRepository: VacacionesRepository);
    create(vacaciones: Omit<Vacaciones, 'id'>): Promise<Vacaciones>;
    count(where?: Where<Vacaciones>): Promise<Count>;
    find(filter?: Filter<Vacaciones>): Promise<Vacaciones[]>;
    updateAll(vacaciones: Vacaciones, where?: Where<Vacaciones>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Vacaciones>): Promise<Vacaciones>;
    updateById(id: string, vacaciones: Vacaciones): Promise<void>;
    replaceById(id: string, vacaciones: Vacaciones): Promise<void>;
    deleteById(id: string): Promise<void>;
}
