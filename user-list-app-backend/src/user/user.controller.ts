import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { IndexTodoSwagger } from 'src/swagger/index-todo.swagger';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // add a user
  @Post('/create')
  @ApiOperation({
    summary: 'Criação e inserção de um usuário no banco de dados',
  })
  @ApiCreatedResponse({
    description: 'Criação e inserção de um usuário no banco de dados',
    type: CreateUserDTO,
  })
  @ApiBody({
    type: CreateUserDTO,
  })
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been created successfully',
      user,
    });
  }

  // Retrieve users list
  @Get('/users')
  @ApiOperation({
    summary: 'Busca de todos os usuários presentes na tabela do banco de dados',
  })
  @ApiOkResponse({
    description: 'Busca de todos os usuários na database',
    type: IndexTodoSwagger,
    isArray: true,
  })
  async getAllUser(@Res() res) {
    const users = await this.userService.getAllUser();
    return res.status(HttpStatus.OK).json(users);
  }

  // Fetch a particular user using ID
  @Get('/:userID')
  @ApiOperation({
    summary: 'Busca de um usuário específico na database com o id',
  })
  @ApiOkResponse({
    description: 'Busca de um usuário específico na database com o id',
    type: CreateUserDTO,
  })
  @ApiNotFoundResponse({ description: 'Usuário não foi encontrado' })
  async getUser(@Res() res, @Param('userID') userID) {
    const user = await this.userService.getUser(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  @Delete('/:userID')
  @ApiOperation({
    summary: 'Deleção de um usuário específico na database com o id',
  })
  @ApiOkResponse({
    description: 'Deleção de um usuário específico na database com o id',
    type: CreateUserDTO,
  })
  @ApiNotFoundResponse({ description: 'Usuário não foi encontrado' })
  async deleteUser(@Res() res, @Param('userID') userID) {
    const user = await this.userService.deleteUser(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  @Put('/:userID')
  @ApiOperation({
    summary: 'Atualização de um usuário específico na database com o id',
  })
  @ApiOkResponse({
    description: 'Atualização de um usuário específico na database com o id',
    type: CreateUserDTO,
  })
  @ApiBody({
    type: CreateUserDTO,
  })
  @ApiNotFoundResponse({ description: 'Usuário não foi encontrado' })
  async updateUser(
    @Res() res,
    @Param('userID') userID,
    createUserDTO: CreateUserDTO,
  ) {
    const user = await this.userService.updateUser(userID, createUserDTO);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }
}
