import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  nombre!: string
  email!: string
  rol!: string
  image!: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserByJWT()

    console.log(this.route.snapshot.paramMap.get("userId"))
  }

  async getUserByJWT() {
    var token = localStorage.getItem('jwt');
    var decodeToken: JSON =  jwt_decode(token!);
    console.log(decodeToken)
    this.nombre = Object.values(decodeToken)[1].nick
    this.email = Object.values(decodeToken)[1].email
    this.rol = Object.values(decodeToken)[1].rol.nombre
  }



  private readFileAsString(file: File) {
    return new Promise<string>(function(resolve, reject) {
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = function() {
        resolve(this.result as string)
      }
    })
  }

  public includeImageInItem(event: any): void {
    const inputFile = event.target as HTMLInputElement;
    const file: File | null = inputFile.files?.item(0) ?? null;


    this.readFileAsString(file!).then(
      (result) => {
        const imageType: string = this.getImageType(result);
        console.log(imageType);
        const imageBase64: string = this.getImageBase64(result);
        console.log(imageBase64);

        this.image = imageBase64;

      },
      (error) => {
        console.log("No se pudo cargar la imagen")
      })
        
  }


  private getImageType(imageString: string): string {
    const imageStringParts: string[] = imageString.split(",");
    if (imageStringParts.length == 2) {
      return imageStringParts[0];
    } else {
      return "";
    }
  }


  private getImageBase64(imageString: string): string {
    const imageStringParts: string[] = imageString.split(",");
    if (imageStringParts.length == 2) {
      return imageStringParts[1];
    } else {
      return "";
    }
  }

}
