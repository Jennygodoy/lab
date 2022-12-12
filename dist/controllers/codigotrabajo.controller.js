"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodigotrabajoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CodigotrabajoController = class CodigotrabajoController {
    constructor(codigotrabajoRepository) {
        this.codigotrabajoRepository = codigotrabajoRepository;
    }
    async create(codigotrabajo) {
        return this.codigotrabajoRepository.create(codigotrabajo);
    }
    async count(where) {
        return this.codigotrabajoRepository.count(where);
    }
    async find(filter) {
        return this.codigotrabajoRepository.find(filter);
    }
    async updateAll(codigotrabajo, where) {
        return this.codigotrabajoRepository.updateAll(codigotrabajo, where);
    }
    async findById(id, filter) {
        return this.codigotrabajoRepository.findById(id, filter);
    }
    async updateById(id, codigotrabajo) {
        await this.codigotrabajoRepository.updateById(id, codigotrabajo);
    }
    async replaceById(id, codigotrabajo) {
        await this.codigotrabajoRepository.replaceById(id, codigotrabajo);
    }
    async deleteById(id) {
        await this.codigotrabajoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/codigotrabajo'),
    (0, rest_1.response)(200, {
        description: 'Codigotrabajo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Codigotrabajo) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Codigotrabajo, {
                    title: 'NewCodigotrabajo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CodigotrabajoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/codigotrabajo/count'),
    (0, rest_1.response)(200, {
        description: 'Codigotrabajo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Codigotrabajo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CodigotrabajoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/codigotrabajo'),
    (0, rest_1.response)(200, {
        description: 'Array of Codigotrabajo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Codigotrabajo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Codigotrabajo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CodigotrabajoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/codigotrabajo'),
    (0, rest_1.response)(200, {
        description: 'Codigotrabajo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Codigotrabajo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Codigotrabajo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Codigotrabajo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CodigotrabajoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/codigotrabajo/{id}'),
    (0, rest_1.response)(200, {
        description: 'Codigotrabajo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Codigotrabajo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Codigotrabajo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CodigotrabajoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/codigotrabajo/{id}'),
    (0, rest_1.response)(204, {
        description: 'Codigotrabajo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Codigotrabajo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Codigotrabajo]),
    tslib_1.__metadata("design:returntype", Promise)
], CodigotrabajoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/codigotrabajo/{id}'),
    (0, rest_1.response)(204, {
        description: 'Codigotrabajo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Codigotrabajo]),
    tslib_1.__metadata("design:returntype", Promise)
], CodigotrabajoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/codigotrabajo/{id}'),
    (0, rest_1.response)(204, {
        description: 'Codigotrabajo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CodigotrabajoController.prototype, "deleteById", null);
CodigotrabajoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CodigotrabajoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CodigotrabajoRepository])
], CodigotrabajoController);
exports.CodigotrabajoController = CodigotrabajoController;
//# sourceMappingURL=codigotrabajo.controller.js.map