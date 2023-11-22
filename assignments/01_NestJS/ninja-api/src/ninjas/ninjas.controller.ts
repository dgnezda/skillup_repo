import { Controller, Get } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    // GET /ninjas --> []
    @Get()
    getNinjas() {
        return [];
    }

    // GET /ninjas/:id --> { ... }
    @Get(':id')
    getOneNinja() {
        return {};
    }
    
    // POST /ninjas
    // PUT /ninjas/:id --> { ... }
    // DELETE /ninjas/:id
}


