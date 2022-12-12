/* tslint:disable */
/* eslint-disable */
import { VacacionesWithRelations } from './vacaciones-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  cargo: string;
  cargoId?: string;
  disponible: boolean;
  fechaingreso: string;
  id?: string;
  nombre: string;
  vacaciones?: Array<VacacionesWithRelations>;
}
