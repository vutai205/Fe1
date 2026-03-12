import { Component } from "@angular/core";

@Component({
    selector: 'about',
    imports:[],
    templateUrl: './about.html',
    styleUrl:'./about.html',
})

export class About{
    fullName= 'Anh Tài';
    age : number = 20;
    handleClick() {
    alert("Bạn đã click button");
}
}