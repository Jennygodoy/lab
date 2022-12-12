import {Entity, model, property} from '@loopback/repository';

@model()
export class Codigotrabajo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  antiguedad: number;

  @property({
    type: 'number',
    required: true,
  })
  diasotorgados: number;

  @property({
    type: 'boolean',
    required: true,
  })
  vigente: boolean;


  constructor(data?: Partial<Codigotrabajo>) {
    super(data);
  }
}

export interface CodigotrabajoRelations {
  // describe navigational properties here
}

export type CodigotrabajoWithRelations = Codigotrabajo & CodigotrabajoRelations;
