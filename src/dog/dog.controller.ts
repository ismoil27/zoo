import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogSerice: DogService) {}

  @Get()
  public getHelloDog(): string {
    return this.dogSerice.getHelloDog();
  }

  @Get('intro/:id')
  public introduceDog(@Param() params: string, @Query() query: any): string {
    console.log('params:::', params);
    console.log('query', query);
    return this.dogSerice.introduceDog();
  }

  @Post('edit')
  public modifyDetail(@Body() body: any): string {
    console.log('body:', body);

    return this.dogSerice.modifyDetail();
  }
}
