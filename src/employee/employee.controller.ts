import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { AdminAuthGuard } from '../guard/admin-auth-guard.service';

@UseGuards(AdminAuthGuard)
@Controller({ path: 'employees', version: '1' })
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('/:id')
  async findOneById(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeeService.findOneById(id);
  }
}
