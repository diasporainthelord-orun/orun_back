import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  health(@Res() res) {
    return res.status(200).json({ message: 'ok' });
  }
}
