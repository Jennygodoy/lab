import { Empleado, Cargo } from '../models';
import { EmpleadoRepository } from '../repositories';
export declare class EmpleadoCargoController {
    empleadoRepository: EmpleadoRepository;
    constructor(empleadoRepository: EmpleadoRepository);
    getCargo(id: typeof Empleado.prototype.id): Promise<Cargo>;
}
