import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { TestDataSource } from '../datasources';
import { Cargo, CargoRelations, Empleado } from '../models';
import { EmpleadoRepository } from './empleado.repository';
export declare class CargoRepository extends DefaultCrudRepository<Cargo, typeof Cargo.prototype.id, CargoRelations> {
    protected empleadoRepositoryGetter: Getter<EmpleadoRepository>;
    readonly empleados: HasManyRepositoryFactory<Empleado, typeof Cargo.prototype.id>;
    constructor(dataSource: TestDataSource, empleadoRepositoryGetter: Getter<EmpleadoRepository>);
}
