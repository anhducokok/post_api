import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getCalc(nums1: number, nums2: number): number{
    return nums1 + nums2;
  }
}
