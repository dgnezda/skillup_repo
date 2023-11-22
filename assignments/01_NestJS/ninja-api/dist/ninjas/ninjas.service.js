"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NinjasService = void 0;
const common_1 = require("@nestjs/common");
let NinjasService = class NinjasService {
    constructor() {
        this.ninjas = [
            { id: 0, name: 'ninjaA', weapon: 'stars' },
            { id: 1, name: 'ninjaB', weapon: 'nunchucks' },
        ];
    }
    getNinjas(weapon) {
        if (weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }
        return this.ninjas;
    }
    getNinja(id) {
        const ninja = this.ninjas.find((ninja) => ninja.id === id);
        if (!ninja) {
            throw new Error('ninja not found');
        }
        return ninja;
    }
    createNinja(createNinjaDto) {
        const newNinja = {
            ...createNinjaDto,
            id: Date.now(),
        };
        this.ninjas.push(newNinja);
        return newNinja;
    }
    updateNinja(id, updateNinjaDto) {
        this.ninjas = this.ninjas.map((ninja) => {
            if (ninja.id === id) {
                return { ...ninja, ...updateNinjaDto };
            }
            return ninja;
        });
        return this.getNinja(id);
    }
    removeNinja(id) {
        const toBeRemoved = this.getNinja(id);
        this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
        return toBeRemoved;
    }
};
exports.NinjasService = NinjasService;
exports.NinjasService = NinjasService = __decorate([
    (0, common_1.Injectable)()
], NinjasService);
//# sourceMappingURL=ninjas.service.js.map