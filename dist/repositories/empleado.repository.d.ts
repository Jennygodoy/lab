import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { TestDataSource } from '../datasources';
import { Empleado, EmpleadoRelations, Cargo, Vacaciones } from '../models';
import { CargoRepository } from './cargo.repository';
import { VacacionesRepository } from './vacaciones.repository';
export declare class EmpleadoRepository extends DefaultCrudRepository<Empleado, typeof Empleado.prototype.id, EmpleadoRelations> {
    protected cargoRepositoryGetter: Getter<CargoRepository>;
    protected vacacionesRepositoryGetter: Getter<VacacionesRepository>;
    readonly cargo: BelongsToAccessor<Cargo, typeof Empleado.prototype.id>;
    readonly vacaciones: HasManyRepositoryFactory<Vacaciones, typeof Empleado.prototype.id>;
    constructor(dataSource: TestDataSource, cargoRepositoryGetter: Getter<CargoRepository>, vacacionesRepositoryGetter: Getter<VacacionesRepository>);
}
