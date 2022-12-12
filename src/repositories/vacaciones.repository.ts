import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {TestDataSource} from '../datasources';
import {Vacaciones, VacacionesRelations, Empleado} from '../models';
import {EmpleadoRepository} from './empleado.repository';

export class VacacionesRepository extends DefaultCrudRepository<
  Vacaciones,
  typeof Vacaciones.prototype.id,
  VacacionesRelations
> {

  public readonly empleado: BelongsToAccessor<Empleado, typeof Vacaciones.prototype.id>;

  constructor(
    @inject('datasources.test') dataSource: TestDataSource, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>,
  ) {
    super(Vacaciones, dataSource);
    this.empleado = this.createBelongsToAccessorFor('empleado', empleadoRepositoryGetter,);
    this.registerInclusionResolver('empleado', this.empleado.inclusionResolver);
  }
}
