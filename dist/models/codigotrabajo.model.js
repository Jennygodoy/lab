"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codigotrabajo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Codigotrabajo = class Codigotrabajo extends repository_1.Entity {
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
], Codigotrabajo.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Codigotrabajo.prototype, "antiguedad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Codigotrabajo.prototype, "diasotorgados", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Codigotrabajo.prototype, "vigente", void 0);
Codigotrabajo = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Codigotrabajo);
exports.Codigotrabajo = Codigotrabajo;
//# sourceMappingURL=codigotrabajo.model.js.map