import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import { AppMode } from '../../models/table.model';

@Component({
  selector: 'app-mode-selector',
  imports: [],
  templateUrl: './mode-selector.component.html',
  styleUrl: './mode-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModeSelectorComponent {
  selectedMode = model.required<AppMode>();
  modes = signal([
    {
      value: AppMode.TABLE_PREVIEW,
      label: 'Table Preview',
    },
    {
      value: AppMode.DISH_CONFIGURATOR,
      label: 'Dish Configurator',
    },
    {
      value: AppMode.PLATE_CONFIGURATOR,
      label: 'Plate Configurator',
    },
  ]);

  onModeChange(event: Event): void {
    this.selectedMode.set((event.target as HTMLSelectElement).value as AppMode);
  }
}
