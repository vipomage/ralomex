import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exposition } from '../../../../tools/interfaces/DatabaseSchema';
import { FireService } from '../../../../tools/services/fire.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-expo-full',
  templateUrl: './expo-full.component.html',
  styleUrls: ['./expo-full.component.scss'],
})
export class ExpoFullComponent implements OnInit {
  expo: Exposition;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fireService: FireService,
    public domSanitizer:DomSanitizer
    ) {}

  async ngOnInit() {
    this.expo = await this.fireService
      .getSingleExpo(this.activatedRoute.snapshot.params.id)
      .toPromise();
  }
}
