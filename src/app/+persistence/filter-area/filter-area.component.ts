import { Component, Input, OnInit } from '@angular/core';
import { ListDirective, filter } from 'right-angled';

import { LookupsService } from '../../shared/index';

@Component({
  selector: 'rt-demo-filter-area',
  styleUrls: ['filter-area.component.scss'],
  templateUrl: 'filter-area.component.html'
})
export class FilterAreaComponent implements OnInit {
  @Input() public list: ListDirective = null;
  @filter() public airportName: string = null;
  @filter('airportSize') public selectedAirportSize: string = null;
  @filter('airportType') public selectedAirportType: string = null;
  public airportSizes: any;
  public airportTypes: any;
  constructor(private lookupsService: LookupsService) {
  }
  public ngOnInit(): void {
    this.airportSizes = this.lookupsService.getAirportSizeLookups();
    this.airportTypes = this.lookupsService.getAirportTypeLookups();
  }
}
