"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const empleado_model_1 = require("./empleado.model");
let Cargo = class Cargo extends repository_1.Entity {
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
], Cargo.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cargo.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => empleado_model_1.Empleado),
    tslib_1.__metadata("design:type", Array)
], Cargo.prototype, "empleados", void 0);
Cargo = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cargo);
exports.Cargo = Cargo;
//# sourceMappingURL=cargo.model.js.map