/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'id'>, 'cargoId'>, schemaOptions: { title: 'NewEmpleadoInCargo', exclude: [ 'id' ], optional: [ 'cargoId' ] })
 */
export interface NewEmpleadoInCargo {
  cargo: string;
  cargoId?: string;
  disponible: boolean;
  fechaingreso: string;
  nombre: string;
}
