import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { StatementComponent } from './statement/statement.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'statement', pathMatch: 'full'},
  {path: 'statement', component: StatementComponent},
  {path: 'new-transfer', component: NewTransferComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
