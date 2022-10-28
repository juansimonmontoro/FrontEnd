import { Component, OnInit } from '@angular/core';
import { HardSoftSkills } from 'src/app/model/hard-soft-skills';
import { HardSoftSkillsService } from 'src/app/service/hard-soft-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})

export class HardAndSoftSkillsComponent implements OnInit {  
  hss: HardSoftSkills[] = [];
  constructor(private hardsoftskillss: HardSoftSkillsService, private tokenService: TokenService) { }
  isLogged = false;
 
  ngOnInit(): void {
    this.cargarHardSoftSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHardSoftSkills(): void {
    this.hardsoftskillss.lista().subscribe(data => {this.hss = data;})
  }

  delete(id?: number) {
    if (id != undefined) {
      this.hardsoftskillss.delete(id).subscribe(
        data => {
          this.cargarHardSoftSkills();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
