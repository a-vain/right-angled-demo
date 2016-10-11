import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';
import { RtSelectionEvent } from 'right-angled';

@Component({
    selector: 'rt-demo-selection-events',
    templateUrl: 'selection-events.component.html'
})
export class SelectionEventsComponent {
    public countries: Array<any> = new Array<any>();
    constructor(public countriesService: CountriesService) {
        this.countriesService.getSomeCountries()
            .subscribe(countries => this.countries = countries);
    }

    public onItemSelected(evt: RtSelectionEvent): void {
        alertify.log(`${evt.item.name} - selection handled by area`);
    }
    public onItemDeselected(evt: RtSelectionEvent): void {
        alertify.log(`${evt.item.name} - deselection handled by area`);
    }
}
