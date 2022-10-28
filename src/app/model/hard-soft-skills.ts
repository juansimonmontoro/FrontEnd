export class HardSoftSkills {
    id?: number;
    nombreHSS: string;
    porcentajeHSS: number;
    imgHSS: string;

   /* constructor(nombreHSS: string, imgHSS: string) {
        this.nombreHSS = nombreHSS;     
        this.imgHSS = imgHSS;
    }*/

    constructor(nombreHSS: string, porcentajeHSS: number, imgHSS: string) {
         this.nombreHSS = nombreHSS;
         this.porcentajeHSS = porcentajeHSS;
         this.imgHSS = imgHSS;
     }
}
