import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHelloCat(): string {
    return 'Hello from cat Service';
  }

  public introduceCat(): string {
    return 'My name is, my name is slam shady Cat';
  }
}
