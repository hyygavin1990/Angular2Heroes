// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Hero} from "../../../pojo/hero";
import {HeroService} from "../service/hero.service";

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  providers:[HeroService],
  templateUrl:'../view/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  hero:Hero;
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}