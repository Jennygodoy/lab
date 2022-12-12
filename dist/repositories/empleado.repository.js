"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EmpleadoRepository = class EmpleadoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, cargoRepositoryGetter, vacacionesRepositoryGetter) {
        super(models_1.Empleado, dataSource);
        this.cargoRepositoryGetter = cargoRepositoryGetter;
        this.vacacionesRepositoryGetter = vacacionesRepositoryGetter;
        this.vacaciones = this.createHasManyRepositoryFactoryFor('vacaciones', vacacionesRepositoryGetter);
        this.registerInclusionResolver('vacaciones', this.vacaciones.inclusionResolver);
        this.cargo = this.createBelongsToAccessorFor('cargo', cargoRepositoryGetter);
        this.registerInclusionResolver('cargo', this.cargo.inclusionResolver);
    }
};
EmpleadoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.test')),
    tslib_1.__param(1, repository_1.repository.getter('CargoRepository')),
    tslib_1.__param(2, repository_1.repository.getter('VacacionesRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.TestDataSource, Function, Function])
], EmpleadoRepository);
exports.EmpleadoRepository = EmpleadoRepository;
//# sourceMappingURL=empleado.repository.js.map