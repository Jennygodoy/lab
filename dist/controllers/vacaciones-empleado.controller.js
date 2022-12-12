"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacacionesEmpleadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VacacionesEmpleadoController = class VacacionesEmpleadoController {
    constructor(vacacionesRepository) {
        this.vacacionesRepository = vacacionesRepository;
    }
    async getEmpleado(id) {
        return this.vacacionesRepository.empleado(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/vacaciones/{id}/empleado', {
        responses: {
            '200': {
                description: 'Empleado belonging to Vacaciones',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Empleado) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacacionesEmpleadoController.prototype, "getEmpleado", null);
VacacionesEmpleadoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VacacionesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VacacionesRepository])
], VacacionesEmpleadoController);
exports.VacacionesEmpleadoController = VacacionesEmpleadoController;
//# sourceMappingURL=vacaciones-empleado.controller.js.map