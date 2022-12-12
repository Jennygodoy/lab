"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoVacacionesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpleadoVacacionesController = class EmpleadoVacacionesController {
    constructor(empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }
    async find(id, filter) {
        return this.empleadoRepository.vacaciones(id).find(filter);
    }
    async create(id, vacaciones) {
        return this.empleadoRepository.vacaciones(id).create(vacaciones);
    }
    async patch(id, vacaciones, where) {
        return this.empleadoRepository.vacaciones(id).patch(vacaciones, where);
    }
    async delete(id, where) {
        return this.empleadoRepository.vacaciones(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/empleados/{id}/vacaciones', {
        responses: {
            '200': {
                description: 'Array of Empleado has many Vacaciones',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones) },
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
], EmpleadoVacacionesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/empleados/{id}/vacaciones', {
        responses: {
            '200': {
                description: 'Empleado model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones, {
                    title: 'NewVacacionesInEmpleado',
                    exclude: ['id'],
                    optional: ['empleadoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoVacacionesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empleados/{id}/vacaciones', {
        responses: {
            '200': {
                description: 'Empleado.Vacaciones PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vacaciones, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Vacaciones))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoVacacionesController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/empleados/{id}/vacaciones', {
        responses: {
            '200': {
                description: 'Empleado.Vacaciones DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Vacaciones))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoVacacionesController.prototype, "delete", null);
EmpleadoVacacionesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EmpleadoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmpleadoRepository])
], EmpleadoVacacionesController);
exports.EmpleadoVacacionesController = EmpleadoVacacionesController;
//# sourceMappingURL=empleado-vacaciones.controller.js.map