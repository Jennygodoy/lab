import { Count, Filter, Where } from '@loopback/repository';
import { Cargo, Empleado } from '../models';
import { CargoRepository } from '../repositories';
export declare class CargoEmpleadoController {
    protected cargoRepository: CargoRepository;
    constructor(cargoRepository: CargoRepository);
    find(id: string, filter?: Filter<Empleado>): Promise<Empleado[]>;
    create(id: typeof Cargo.prototype.id, empleado: Omit<Empleado, 'id'>): Promise<Empleado>;
    patch(id: string, empleado: Partial<Empleado>, where?: Where<Empleado>): Promise<Count>;
    delete(id: string, where?: Where<Empleado>): Promise<Count>;
}
