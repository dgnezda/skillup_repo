"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NinjasModule = void 0;
const common_1 = require("@nestjs/common");
const ninjas_controller_1 = require("./ninjas.controller");
const ninjas_service_1 = require("./ninjas.service");
let NinjasModule = class NinjasModule {
};
exports.NinjasModule = NinjasModule;
exports.NinjasModule = NinjasModule = __decorate([
    (0, common_1.Module)({
        controllers: [ninjas_controller_1.NinjasController],
        providers: [ninjas_service_1.NinjasService]
    })
], NinjasModule);
//# sourceMappingURL=ninjas.module.js.map