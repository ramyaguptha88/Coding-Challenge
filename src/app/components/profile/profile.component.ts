import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProfileService } from '../../services/profile.service';
import { ProfileModel, PeopleModel } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileList: ProfileModel[];
  private subscription: Subscription[];
  showPage: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.showPage = false;
    this.profileService.getProfileList('assets/json/people.json').subscribe(
      (data: PeopleModel) => {
        this.profileService.setProfiles(data.People);
        this.profileList = data.People;
        this.showPage = true
      }
    );

  }

  getProfileDetails(name: string) {
    this.router.navigate(['profile/Details'], {
      queryParams: {
        peopleName: name
      }
    });
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }
}
