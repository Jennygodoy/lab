"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoCargoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpleadoCargoController = class EmpleadoCargoController {
    constructor(empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }
    async getCargo(id) {
        return this.empleadoRepository.cargo(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/empleados/{id}/cargo', {
        responses: {
            '200': {
                description: 'Cargo belonging to Empleado',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Cargo) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoCargoController.prototype, "getCargo", null);
EmpleadoCargoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EmpleadoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmpleadoRepository])
], EmpleadoCargoController);
exports.EmpleadoCargoController = EmpleadoCargoController;
//# sourceMappingURL=empleado-cargo.controller.js.map