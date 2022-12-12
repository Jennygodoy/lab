import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { TestDataSource } from '../datasources';
import { Vacaciones, VacacionesRelations, Empleado } from '../models';
import { EmpleadoRepository } from './empleado.repository';
export declare class VacacionesRepository extends DefaultCrudRepository<Vacaciones, typeof Vacaciones.prototype.id, VacacionesRelations> {
    protected empleadoRepositoryGetter: Getter<EmpleadoRepository>;
    readonly empleado: BelongsToAccessor<Empleado, typeof Vacaciones.prototype.id>;
    constructor(dataSource: TestDataSource, empleadoRepositoryGetter: Getter<EmpleadoRepository>);
}
