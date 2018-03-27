import { BarrelModule } from '../../barrel';
import { NgModule } from '@angular/core';
import { PrefsComponent } from './prefs';
import { RootPageComponent } from './page';

/**
 * Root page module
 */

const COMPONENTS = [
  PrefsComponent,
  RootPageComponent
];

const MODULES = [
  BarrelModule
];

@NgModule({

  declarations: [
    ...COMPONENTS
  ],

  exports: [
    RootPageComponent
  ],

  imports: [
    ...MODULES
  ]

})

export class RootPageModule { }