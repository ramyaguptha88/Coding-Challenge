import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProfileModel } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-profileDetails',
  templateUrl: './profileDetails.component.html',
  styleUrls: ['./profileDetails.component.scss']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy{
  
  selectedProfile: ProfileModel;
  showPage: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService) {}

  ngOnInit() {
    this.showPage = false;
    this.route.queryParams
    .subscribe(
      (params: Params) => {
        if(params['peopleName'] !== null ) {
          this.showPage = true;
          this.selectedProfile = this.profileService.getProfileWithId(params['peopleName']);
        } else {
          this.router.navigate(['profile']);
        }
        
      }
    );
  }

  ngOnDestroy() {

  }
}
