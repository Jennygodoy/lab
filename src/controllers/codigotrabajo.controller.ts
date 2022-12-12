import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Codigotrabajo} from '../models';
import {CodigotrabajoRepository} from '../repositories';

export class CodigotrabajoController {
  constructor(
    @repository(CodigotrabajoRepository)
    public codigotrabajoRepository : CodigotrabajoRepository,
  ) {}

  @post('/codigotrabajo')
  @response(200, {
    description: 'Codigotrabajo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Codigotrabajo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codigotrabajo, {
            title: 'NewCodigotrabajo',
            exclude: ['id'],
          }),
        },
      },
    })
    codigotrabajo: Omit<Codigotrabajo, 'id'>,
  ): Promise<Codigotrabajo> {
    return this.codigotrabajoRepository.create(codigotrabajo);
  }

  @get('/codigotrabajo/count')
  @response(200, {
    description: 'Codigotrabajo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Codigotrabajo) where?: Where<Codigotrabajo>,
  ): Promise<Count> {
    return this.codigotrabajoRepository.count(where);
  }

  @get('/codigotrabajo')
  @response(200, {
    description: 'Array of Codigotrabajo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Codigotrabajo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Codigotrabajo) filter?: Filter<Codigotrabajo>,
  ): Promise<Codigotrabajo[]> {
    return this.codigotrabajoRepository.find(filter);
  }

  @patch('/codigotrabajo')
  @response(200, {
    description: 'Codigotrabajo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codigotrabajo, {partial: true}),
        },
      },
    })
    codigotrabajo: Codigotrabajo,
    @param.where(Codigotrabajo) where?: Where<Codigotrabajo>,
  ): Promise<Count> {
    return this.codigotrabajoRepository.updateAll(codigotrabajo, where);
  }

  @get('/codigotrabajo/{id}')
  @response(200, {
    description: 'Codigotrabajo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Codigotrabajo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Codigotrabajo, {exclude: 'where'}) filter?: FilterExcludingWhere<Codigotrabajo>
  ): Promise<Codigotrabajo> {
    return this.codigotrabajoRepository.findById(id, filter);
  }

  @patch('/codigotrabajo/{id}')
  @response(204, {
    description: 'Codigotrabajo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codigotrabajo, {partial: true}),
        },
      },
    })
    codigotrabajo: Codigotrabajo,
  ): Promise<void> {
    await this.codigotrabajoRepository.updateById(id, codigotrabajo);
  }

  @put('/codigotrabajo/{id}')
  @response(204, {
    description: 'Codigotrabajo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() codigotrabajo: Codigotrabajo,
  ): Promise<void> {
    await this.codigotrabajoRepository.replaceById(id, codigotrabajo);
  }

  @del('/codigotrabajo/{id}')
  @response(204, {
    description: 'Codigotrabajo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.codigotrabajoRepository.deleteById(id);
  }
}
