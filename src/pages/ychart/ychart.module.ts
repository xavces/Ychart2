import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YchartPage } from './ychart';

@NgModule({
  declarations: [
    YchartPage,
  ],
  imports: [
    IonicPageModule.forChild(YchartPage),
  ],
})
export class YchartPageModule {}
