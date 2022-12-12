import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cargo } from '../models';
import { CargoRepository } from '../repositories';
export declare class CargoController {
    cargoRepository: CargoRepository;
    constructor(cargoRepository: CargoRepository);
    create(cargo: Omit<Cargo, 'id'>): Promise<Cargo>;
    count(where?: Where<Cargo>): Promise<Count>;
    find(filter?: Filter<Cargo>): Promise<Cargo[]>;
    updateAll(cargo: Cargo, where?: Where<Cargo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cargo>): Promise<Cargo>;
    updateById(id: string, cargo: Cargo): Promise<void>;
    replaceById(id: string, cargo: Cargo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
