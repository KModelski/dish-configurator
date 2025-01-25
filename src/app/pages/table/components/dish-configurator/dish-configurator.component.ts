import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dish-configurator',
  imports: [],
  templateUrl: './dish-configurator.component.html',
  styleUrl: './dish-configurator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishConfiguratorComponent { }
