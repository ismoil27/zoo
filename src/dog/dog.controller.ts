import { Controller, Get, Param, Req } from '@nestjs/common';
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
  public introduceDog(@Param() params:any): string {
    console.log('params:::', params);
    // console.log('query', request.query);
    
    return this.dogSerice.introduceDog();
  }
}
