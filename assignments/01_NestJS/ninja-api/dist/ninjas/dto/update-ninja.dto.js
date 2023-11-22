"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNinjaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ninja_dto_1 = require("./create-ninja.dto");
class UpdateNinjaDto extends (0, mapped_types_1.PartialType)(create_ninja_dto_1.CreateNinjaDto) {
}
exports.UpdateNinjaDto = UpdateNinjaDto;
//# sourceMappingURL=update-ninja.dto.js.map