import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';
import { TeamMember } from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-the-team',
  templateUrl: './the-team.component.html',
  styleUrls: ['./the-team.component.scss']
})
export class TheTeamComponent implements OnInit {
  teamMembers:{[propName:string]:TeamMember};
  constructor(
    private fireService:FireService
  ) { }

  async ngOnInit() {
    this.teamMembers = (await this.fireService.memberUtils.getMembers());
  }

}
