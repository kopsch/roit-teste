import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export class IndexTodoSwagger {
  @ApiProperty({ type: CreateUserDTO, isArray: true })
  items: CreateUserDTO;
}
