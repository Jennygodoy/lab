"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CargoRepository = class CargoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, empleadoRepositoryGetter) {
        super(models_1.Cargo, dataSource);
        this.empleadoRepositoryGetter = empleadoRepositoryGetter;
        this.empleados = this.createHasManyRepositoryFactoryFor('empleados', empleadoRepositoryGetter);
        this.registerInclusionResolver('empleados', this.empleados.inclusionResolver);
    }
};
CargoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.test')),
    tslib_1.__param(1, repository_1.repository.getter('EmpleadoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.TestDataSource, Function])
], CargoRepository);
exports.CargoRepository = CargoRepository;
//# sourceMappingURL=cargo.repository.js.map