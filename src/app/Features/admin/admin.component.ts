import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Tools/services/auth.service';
import { FireService } from '../../Tools/services/fire.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public authService: AuthService, private db: FireService) {}

  ngOnInit() {}
}
