import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-preview',
  imports: [],
  templateUrl: './table-preview.component.html',
  styleUrl: './table-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePreviewComponent {}
