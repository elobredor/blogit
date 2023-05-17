import { HttpException, HttpStatus } from '@nestjs/common';

/* The ErrorManager class creates and throws errors with a specified type and message. */
export class ErrorManager extends Error {
  constructor({ type, message }: { type: keyof typeof HttpStatus; message: string }) {
    super(`${type} :: ${message}`);
  }

  // Create signature error
  public static createSignatureError(message: string) {
    const name = message.split('::')[0];

    // Check if error name exists
    if (name) {
      throw new HttpException(message, HttpStatus[name]);
    } else {
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
