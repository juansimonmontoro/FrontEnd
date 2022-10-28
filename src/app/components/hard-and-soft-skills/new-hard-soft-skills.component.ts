import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSoftSkills } from 'src/app/model/hard-soft-skills';
import { HardSoftSkillsService } from 'src/app/service/hard-soft-skills.service';

@Component({
  selector: 'app-new-hard-soft-skills',
  templateUrl: './new-hard-soft-skills.component.html',
  styleUrls: ['./new-hard-soft-skills.component.css']
})

export class NewHardSoftSkillsComponent implements OnInit {
  nombreHSS: string = '';
  porcentajeHSS: number = 0;
  imgHSS: string = '';

  constructor(private sHardSoftSkills: HardSoftSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hardsoftskills = new HardSoftSkills(this.nombreHSS, this.porcentajeHSS, this.imgHSS);
    //const hardsoftskills = new HardSoftSkills(this.nombreHSS, this.imgHSS);
    this.sHardSoftSkills.save(hardsoftskills).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}

