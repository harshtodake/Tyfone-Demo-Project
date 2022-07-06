import { Injectable } from '@angular/core';
export interface Payment {
  name: string;
  amount?: number;
  account?: number;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  userName: string | number;
  savingAccount: number = 8000;

  constructor() {}
}
