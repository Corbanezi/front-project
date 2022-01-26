import { NgModule } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


const MaterialComponents = [
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule
];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }


// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }
// export class GridListDynamicExample {
//   tiles: Tile[] = [
//     {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
//     {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
//     {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
//     {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
//   ];
// }