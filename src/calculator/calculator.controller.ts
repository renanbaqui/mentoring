import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';

@Controller('calculator')
export class CalculatorController {
    @Get()
    getHello(): string {
      return "Calculator!!";
    }

    @Get('sum/:value1/:value2')
    getSum(@Param() params): number {
        const vl1: number = Number(params.value1);
        const vl2: number = Number(params.value2);
        if (Number.isNaN(vl1)) {
            throw new HttpException(params.value1 + " is not a number!", HttpStatus.BAD_REQUEST);
        }
        if (Number.isNaN(vl2)) {
            throw new HttpException(params.value2 + " is not a number!", HttpStatus.BAD_REQUEST);
        }
        const result: number = vl1 + vl2;
        return result;
    }
}
