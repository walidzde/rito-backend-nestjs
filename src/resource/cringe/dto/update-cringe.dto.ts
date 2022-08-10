import { PartialType } from '@nestjs/mapped-types';
import { CreateCringeDto } from './create-cringe.dto';

export class UpdateCringeDto extends PartialType(CreateCringeDto) {}
