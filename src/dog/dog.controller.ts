import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogSerice: DogService) {}

  @Get()
  public getHelloDog(): string {
    return this.dogSerice.getHelloDog();
  }

  @Get('intro/:id')
  public introduceDog(@Param('id') id: string, @Query() query: any): string {
    console.log('id:::', id);
    console.log('query', query);

    return this.dogSerice.introduceDog();
  }
}
