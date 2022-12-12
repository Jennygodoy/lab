import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TestDataSource} from '../datasources';
import {Codigotrabajo, CodigotrabajoRelations} from '../models';

export class CodigotrabajoRepository extends DefaultCrudRepository<
  Codigotrabajo,
  typeof Codigotrabajo.prototype.id,
  CodigotrabajoRelations
> {
  constructor(
    @inject('datasources.test') dataSource: TestDataSource,
  ) {
    super(Codigotrabajo, dataSource);
  }
}
