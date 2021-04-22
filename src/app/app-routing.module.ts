import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsUserComponent } from './coupons-user/coupons-user.component';

const routes: Routes = [
  {path:'',component:CouponsUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
