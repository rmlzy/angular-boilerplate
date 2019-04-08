import { Injectable } from '@angular/core';
import Mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleTableService {
  constructor() {}

  queryTableData() {
    const mockRes = Mock.mock({
      code: 200,
      message: 'SUCCESS',
      'data|1-100': [
        {
          'id|+1': 1,
          name: '@cname()',
          sex: '@integer(1, 2)',
          email: '@email()',
          idCardNo: '@natural()',
          address: '@county()',
          enable: '@boolean()'
        }
      ]
    });
    return Promise.resolve(mockRes.data);
  }
}
