import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  
  selectedName: string;
  private subscription: Subscription[];
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
      this.profileService.nameChanged.subscribe(
        (value: string) => {
          this.selectedName = value;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }
}
