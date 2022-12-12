"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacacionesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VacacionesController = class VacacionesController {
    constructor(vacacionesRepository) {
        this.vacacionesRepository = vacacionesRepository;
    }
    async create(vacaciones) {
        return this.vacacionesRepository.create(vacaciones);
    }
    async count(where) {
        return this.vacacionesRepository.count(where);
    }
    async find(filter) {
        return this.vacacionesRepository.find(filter);
    }
    async updateAll(vacaciones, where) {
        return this.vacacionesRepository.updateAll(vacaciones, where);
    }
    async findById(id, filter) {
        return this.vacacionesRepository.findById(id, filter);
    }
    async updateById(id, vacaciones) {
        await this.vacacionesRepository.updateById(id, vacaciones);
    }
    async replaceById(id, vacaciones) {
        await this.vacacionesRepository.replaceById(id, vacaciones);
    }
    async deleteById(id) {
        await this.vacacionesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/vacaciones'),
    (0, rest_1.response)(200, {
        description: 'Vacaciones model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones, {
                    title: 'NewVacaciones',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vacaciones/count'),
    (0, rest_1.response)(200, {
        description: 'Vacaciones model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Vacaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vacaciones'),
    (0, rest_1.response)(200, {
        description: 'Array of Vacaciones model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Vacaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vacaciones'),
    (0, rest_1.response)(200, {
        description: 'Vacaciones PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Vacaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Vacaciones, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vacaciones/{id}'),
    (0, rest_1.response)(200, {
        description: 'Vacaciones model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Vacaciones, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vacaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vacaciones PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vacaciones]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/vacaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vacaciones PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vacaciones]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/vacaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vacaciones DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesController.prototype, "deleteById", null);
VacacionesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VacacionesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VacacionesRepository])
], VacacionesController);
exports.VacacionesController = VacacionesController;
//# sourceMappingURL=vacaciones.controller.js.map