import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ type: String, description: 'id' })
  readonly id: string;

  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;

  @ApiProperty({ type: Number, description: 'age' })
  readonly age: number;

  @ApiProperty({ type: String, description: 'github user' })
  readonly githubUser: string;

  @ApiProperty({ type: String, description: 'cep' })
  readonly cep: string;

  @ApiProperty({ type: String, description: 'state' })
  readonly state: string;

  @ApiProperty({ type: String, description: 'city' })
  readonly city: string;

  @ApiProperty({ type: String, description: 'district' })
  readonly district: string;

  @ApiProperty({ type: String, description: 'street' })
  readonly street: string;

  @ApiProperty({ type: Number, description: 'number' })
  readonly number: number;

  @ApiProperty({ type: String, description: 'complement' })
  readonly complement: string;
}
