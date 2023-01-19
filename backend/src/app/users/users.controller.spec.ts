import { Test } from '@nestjs/testing';
import { RegisterRespDto } from './dtos/response.dto';
import { RegisterDto } from './dtos/users.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('[TEST] UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  describe('[POST] /users', () => {
    it('create user by body data', async () => {
      const userData: RegisterDto = {
        email: 'evanjones0407@outlook.com',
        firstName: 'Evan',
        lastName: 'Jones',
        password: 'Security!2022',
      };
      const result: RegisterRespDto = {
        message: 'You have been registered successfully.',
        user: {
          _id: '63c403e86ada20055c245b1c',
          email: 'evanjones0407@outlook.com',
          firstName: 'Evan',
          lastName: 'Jones',
          password: 'Security!2022',
        },
      };

      jest.spyOn(usersService, 'create').mockImplementation(async () => result);

      expect(await usersController.create(userData)).toBe(result);
    });
  });
});
