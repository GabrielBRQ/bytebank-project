import { Component, Input } from '@angular/core';
import { Transfer } from '../models/transfer.module';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent {
  transferObjs: any[];

  constructor(private service: TransferService){}

  ngOnInit(){
    this.service.allTransfers().subscribe((transferObjs: Transfer[]) => {
      console.table(transferObjs);
      this.transferObjs = transferObjs;
    })
  }
}
