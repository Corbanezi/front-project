import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './shared/pages/master-page/master-page.component';
import { TablePageComponent } from './table/pages/table-page/table-page.component';

const routes: Routes = [{
  path: '',
  component: MasterPageComponent,
  children: [
    {
      path: 'table-page',
      component: TablePageComponent,
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
