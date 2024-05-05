import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

// localhost:3000/cat
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  public getHelloCat(): string {
    return this.catService.getHelloCat();
  }

  @Get('intro')
  public introduceCat(): string {
    return this.catService.introduceCat();
  }
}
