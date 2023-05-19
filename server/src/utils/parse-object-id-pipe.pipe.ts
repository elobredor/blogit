import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import mongoose from 'mongoose';

/*The pipe is supported by the isObjectIdOrHexString method of the mongoose package. which returns true if it is a valid MongoDB 
identifier, or false otherwise.*/
@Injectable()
export class ParseObjectIdPipe implements PipeTransform<any, mongoose.Types.ObjectId> {
  transform(value: any): mongoose.Types.ObjectId {
    const validObjectId: boolean = mongoose.isObjectIdOrHexString(value);
    if (!validObjectId) throw new BadRequestException('Invalid ObjectId');
    return value;
  }
}
