import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer.module';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferList: any[];
  private url = 'http://localhost:3000/transfers';

constructor(private httpClient: HttpClient) {
  this.transferList = [];
 }

 get transfers(){
   return this.transferList;
 }

 allTransfers(): Observable<Transfer[]>{
  return this.httpClient.get<Transfer[]>(this.url);
 }

 add(transfer: Transfer): Observable<Transfer>{
    this.edit(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer);
 }

 private edit(transfer: any){
  transfer.date = new Date();
 }
}
