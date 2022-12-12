"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacaciones = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const empleado_model_1 = require("./empleado.model");
let Vacaciones = class Vacaciones extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Vacaciones.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Vacaciones.prototype, "fecha", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Vacaciones.prototype, "empleadoid", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => empleado_model_1.Empleado),
    tslib_1.__metadata("design:type", String)
], Vacaciones.prototype, "empleadoId", void 0);
Vacaciones = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Vacaciones);
exports.Vacaciones = Vacaciones;
//# sourceMappingURL=vacaciones.model.js.map