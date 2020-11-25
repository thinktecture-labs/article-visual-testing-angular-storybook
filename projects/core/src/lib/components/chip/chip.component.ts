import {Component, Input} from '@angular/core';

@Component({
  selector: 'labs-chip',
  templateUrl: 'chip.component.html',
  styleUrls: ['chip.component.scss'],
})

export class ChipComponent {
  @Input() label: string;
  @Input() count: number;
}
