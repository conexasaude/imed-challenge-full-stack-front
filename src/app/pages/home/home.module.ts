import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceFormComponent } from './attendance/attendance-form/attendance-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    UserComponent,
    ProductComponent,
    OrderComponent,
    UserFormComponent,
    ProductFormComponent,
    AttendanceComponent,
    AttendanceFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class HomeModule {}
