import { Count, Filter, Where } from '@loopback/repository';
import { Empleado, Vacaciones } from '../models';
import { EmpleadoRepository } from '../repositories';
export declare class EmpleadoVacacionesController {
    protected empleadoRepository: EmpleadoRepository;
    constructor(empleadoRepository: EmpleadoRepository);
    find(id: string, filter?: Filter<Vacaciones>): Promise<Vacaciones[]>;
    create(id: typeof Empleado.prototype.id, vacaciones: Omit<Vacaciones, 'id'>): Promise<Vacaciones>;
    patch(id: string, vacaciones: Partial<Vacaciones>, where?: Where<Vacaciones>): Promise<Count>;
    delete(id: string, where?: Where<Vacaciones>): Promise<Count>;
}
