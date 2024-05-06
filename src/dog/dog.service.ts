import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHelloDog(): string {
    return 'Hello from Dog Service';
  }

  public introduceDog(): string {
    return 'My name is Dog faster';
  }

  public modifyDetail(): string {
    return 'Successfully modified';
  }
}
