import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ralomex-logo',
  templateUrl: './ralomex-logo.component.html',
  styleUrls: ['./ralomex-logo.component.scss']
})
export class RalomexLogoComponent {
  @Input() lang :string;
}
