import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HardSoftSkills } from '../model/hard-soft-skills';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HardSoftSkillsService {
 URL = environment.URL + 'exphss/';
 

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HardSoftSkills[]> {
    return this.httpClient.get<HardSoftSkills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<HardSoftSkills> {
    return this.httpClient.get<HardSoftSkills>(this.URL + `detail/${id}`);
  }

  public save(hardSoftSkills: HardSoftSkills): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', hardSoftSkills);
  }

  public update(id: number, hardSoftSkills: HardSoftSkills): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, hardSoftSkills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

