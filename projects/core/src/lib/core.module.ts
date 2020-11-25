import {NgModule} from '@angular/core';
import {ButtonComponent} from './components/button/button.component';
import {BadgeComponent} from './components/badge/badge.component';
import {DockComponent} from './components/dock/dock.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [ButtonComponent, BadgeComponent, DockComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, BadgeComponent, DockComponent],
})
export class CoreModule {
}
