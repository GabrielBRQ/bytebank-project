import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from '../models/transfer.module';
import { TransferService } from '../services/transfer.service';

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent{

  @Output() onTransfer = new EventEmitter<any>;

  value: number;
  destination: number;

  constructor(private service: TransferService, private router: Router){

  }

  transfer(){
    console.log('Your transfer has been requested');

    const emitValue: Transfer = ({value : this.value, destination : this.destination});

    this.service.add(emitValue).subscribe
    (result => {
      console.log(result);
      this.clearFields();
      this.router.navigateByUrl('statement');
    },
    (error) => console.error(error));
  }

  clearFields(){
    this.value = 0;
    this.destination = 0;
  }
}
