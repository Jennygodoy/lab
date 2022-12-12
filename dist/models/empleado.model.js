"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cargo_model_1 = require("./cargo.model");
const vacaciones_model_1 = require("./vacaciones.model");
let Empleado = class Empleado extends repository_1.Entity {
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
], Empleado.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Empleado.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Empleado.prototype, "fechaingreso", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Empleado.prototype, "cargo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Empleado.prototype, "disponible", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => cargo_model_1.Cargo),
    tslib_1.__metadata("design:type", String)
], Empleado.prototype, "cargoId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => vacaciones_model_1.Vacaciones),
    tslib_1.__metadata("design:type", Array)
], Empleado.prototype, "vacaciones", void 0);
Empleado = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Empleado);
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.model.js.map