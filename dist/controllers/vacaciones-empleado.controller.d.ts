import { Vacaciones, Empleado } from '../models';
import { VacacionesRepository } from '../repositories';
export declare class VacacionesEmpleadoController {
    vacacionesRepository: VacacionesRepository;
    constructor(vacacionesRepository: VacacionesRepository);
    getEmpleado(id: typeof Vacaciones.prototype.id): Promise<Empleado>;
}
