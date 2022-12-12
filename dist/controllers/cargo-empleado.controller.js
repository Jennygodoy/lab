"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoEmpleadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CargoEmpleadoController = class CargoEmpleadoController {
    constructor(cargoRepository) {
        this.cargoRepository = cargoRepository;
    }
    async find(id, filter) {
        return this.cargoRepository.empleados(id).find(filter);
    }
    async create(id, empleado) {
        return this.cargoRepository.empleados(id).create(empleado);
    }
    async patch(id, empleado, where) {
        return this.cargoRepository.empleados(id).patch(empleado, where);
    }
    async delete(id, where) {
        return this.cargoRepository.empleados(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/cargos/{id}/empleados', {
        responses: {
            '200': {
                description: 'Array of Cargo has many Empleado',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Empleado) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoEmpleadoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/cargos/{id}/empleados', {
        responses: {
            '200': {
                description: 'Cargo model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, {
                    title: 'NewEmpleadoInCargo',
                    exclude: ['id'],
                    optional: ['cargoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoEmpleadoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cargos/{id}/empleados', {
        responses: {
            '200': {
                description: 'Cargo.Empleado PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Empleado))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoEmpleadoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cargos/{id}/empleados', {
        responses: {
            '200': {
                description: 'Cargo.Empleado DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Empleado))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CargoEmpleadoController.prototype, "delete", null);
CargoEmpleadoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CargoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CargoRepository])
], CargoEmpleadoController);
exports.CargoEmpleadoController = CargoEmpleadoController;
//# sourceMappingURL=cargo-empleado.controller.js.map