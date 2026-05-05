import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // A rota será http://localhost:3000/auth
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login') // A rota final: POST /auth/login
  async login(@Body() loginDto: any) {
    // Aqui chamamos o serviço que você já configurou
    return this.authService.login(loginDto.email, loginDto.password);
  }
}