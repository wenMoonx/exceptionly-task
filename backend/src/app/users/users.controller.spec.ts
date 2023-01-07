import { Test } from '@nestjs/testing';
import { User } from './interfaces/users.interface';
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

  describe('[GET] /users', () => {
    it('should return an array of users', () => {
      const result: User[] = [
        {
          id: 1,
          email: 'a@gmail.com',
          password: 'a1234',
        }
      ];
      jest.spyOn(usersService, 'findAll').mockImplementation(() => result);

      expect(usersController.findAll()).toBe(result);
    });
  });

  describe('[GET] /users/:id', () => {
    it('should return an array of user by params id', () => {
      const userId: number = 1;
      const result: User= {
          id: 1,
          email: 'a@gmail.com',
          password: 'a1234',
      }

      jest.spyOn(usersService, 'findById').mockImplementation(() => result);

      expect(usersController.findById(userId)).toBe(result);
    });
  });

  describe('[POST] /users', () => {
    it('create user by body data', () => {
      const userData: User = {
        id: 5,
        email: 'e@gamil.com',
        password: 'a1234'
      };
      const result: User = {
        id: 5,
        email: 'e@gamil.com',
        password: 'a1234'
      }

      jest.spyOn(usersService, 'create').mockImplementation(() => result);

      expect(usersController.create(userData)).toBe(result);
    });
  });

  describe('[PUT] /users/:id', () => {
    it('update user by params id in body data', () => {
      const userId: number = 1;
      const userData: User = {
          email: 'a@gmail.com',
          password: 'a1234',
      }
      const result: User[] = [
        {
          id: 1,
          email: 'q@gamil.com',
          password: 'a1234'
        }
      ]

      jest.spyOn(usersService, 'update').mockImplementation(() => result);

      expect(usersController.update(userId, userData)).toBe(result);
    });
  });

  describe('[DELETE] /users', () => {
    it('delete user by params id', () => {
      const userId: number = 1;
      const result: User[] = [
        {
          id: 1,
          email: 'a@gmail.com',
          password: 'a1234',
        }
      ];
      jest.spyOn(usersService, 'delete').mockImplementation(() => result);

      expect(usersController.delete(userId)).toBe(result);
    });
  });
});
