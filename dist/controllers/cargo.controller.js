"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CargoController = class CargoController {
    constructor(cargoRepository) {
        this.cargoRepository = cargoRepository;
    }
    async create(cargo) {
        return this.cargoRepository.create(cargo);
    }
    async count(where) {
        return this.cargoRepository.count(where);
    }
    async find(filter) {
        return this.cargoRepository.find(filter);
    }
    async updateAll(cargo, where) {
        return this.cargoRepository.updateAll(cargo, where);
    }
    async findById(id, filter) {
        return this.cargoRepository.findById(id, filter);
    }
    async updateById(id, cargo) {
        await this.cargoRepository.updateById(id, cargo);
    }
    async replaceById(id, cargo) {
        await this.cargoRepository.replaceById(id, cargo);
    }
    async deleteById(id) {
        await this.cargoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/cargo'),
    (0, rest_1.response)(200, {
        description: 'Cargo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cargo) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cargo, {
                    title: 'NewCargo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cargo/count'),
    (0, rest_1.response)(200, {
        description: 'Cargo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cargo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cargo'),
    (0, rest_1.response)(200, {
        description: 'Array of Cargo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cargo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cargo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cargo'),
    (0, rest_1.response)(200, {
        description: 'Cargo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cargo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cargo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cargo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cargo/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cargo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cargo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cargo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cargo/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cargo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cargo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cargo]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cargo/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cargo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cargo]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cargo/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cargo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoController.prototype, "deleteById", null);
CargoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CargoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CargoRepository])
], CargoController);
exports.CargoController = CargoController;
//# sourceMappingURL=cargo.controller.js.map