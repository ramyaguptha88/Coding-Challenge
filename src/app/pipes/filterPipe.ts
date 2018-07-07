import { Pipe, PipeTransform } from '@angular/core';
import { ProfileModel } from '../models/profile.model';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: ProfileModel) {
                return el.name.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}