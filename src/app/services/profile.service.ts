import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { PeopleModel, ProfileModel } from '../models/profile.model';
@Injectable()
export class ProfileService {

    profileList: ProfileModel[];
    nameChanged = new Subject<String>();

    constructor(private http: HttpClient) { }

    getProfileList(url: string): Observable<PeopleModel> {
        return this.http.get<PeopleModel>(url);
    }

    setProfiles(dataList: ProfileModel[]) {
        this.profileList = dataList;
    }

    getProfileWithId(name: string): ProfileModel {
        let profile: ProfileModel = null;
        if( name !== null && this.profileList) {
            for (const prf of this.profileList) {
                if (name === prf.name) {
                    profile = prf;
                    break;
                }
            }
            this.nameChanged.next(name);
        } else {
            this.nameChanged.next('');
        }
        return profile;
    }

}