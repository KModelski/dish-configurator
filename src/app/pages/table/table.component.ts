import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeSelectorComponent } from './components/mode-selector/mode-selector.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppMode } from './models/table.model';

@Component({
  selector: 'app-table',
  imports: [CommonModule, ModeSelectorComponent, RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  selectedMode = signal(AppMode.TABLE_PREVIEW);

  onSelectionChange(appMode: AppMode) {
    this.selectedMode.set(appMode);
    this.router.navigate([appMode], { relativeTo: this.route });
  }
}
