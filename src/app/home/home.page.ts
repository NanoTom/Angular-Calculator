import { Component, booleanAttribute } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule],
})
export class HomePage {
  x1: any;
  x2: any;
  ans: any;
  addedx1: boolean;
  addedx2: boolean; 
  turn1: any;


  opper:number;

  constructor() {
    this.x1 = null;
    this.x2 = null;
    this.ans = null;
    this.turn1 = true;


    this.addedx1 = false;
    this.addedx2 = false;

    this.opper = 0;
   }

   calc(){
    this.check() //here we check if the x1 and x2 has a value or no to know what to do next

   }


   //merge number if x1 or x2 has exisiting value
   merger(num:any){
    this.check()
    if (this.addedx1 == true && this.turn1 == true){
      this.x1 = parseInt(`${this.x1}${num}`);  
  } else if (this.addedx2 == true && this.turn1 == false){
      this.x2 = parseInt(`${this.x2}${num}`);  
  }
   }


   // give the number based on the button click to x1 and x2
   assign(num:any){
    this.check()
    if (typeof this.x1 ==='string'){
      this.floatfinx1(num)
      return
    }
    if (this.addedx1 == false && this.turn1 == true){
        this.x1 = num;
        this.addedx1 = true;
    } else if (this.addedx2 == false && this.turn1 == false){
        this.x2 = num;  
        this.addedx2 = true;

    }else if (this.addedx1 == true && this.turn1 == true){
         this.x1 = parseFloat(`${this.x1}${num}`);  
    }else if (this.addedx2 == true && this.turn1 == false){
          this.x2 = parseFloat(`${this.x2}${num}`);  
  }
   }


   //the operation the user called
   opps(opp:number){  // 1 multiplication 2 /  3 -     4 +
    this.opper = opp;
    this.turn1 = false;
   }


   //makes the number float
   floater(){
    this.check()
    if (this.turn1 == true){
      if (this.x1 == null){
        this.x1 = 0;
      }
      this.x1 = this.x1.toString();
      this.x1 = this.x1 + "." 
    }
    if (this.turn1 == false){
      if (this.x2 == null){
        this.x2 = 0;
      }
      this.x2 = this.x2.toString();
      this.x2 = this.x2 + "." 
    }
   }


   //Makes the string number float
   floatfinx1(num:string){
    this.x1 = parseFloat(this.x1+num)
    return
   }

   oppsapply(){
    switch(this.opper){
      case 1:
      this.ans = this.x1 * this.x2;
      break


      case 2:
      this.ans = this.x1/this.x2;
      break

      case 3:
      this.ans = this.x1 - this.x2;
      break

      case 4:
        this.ans = this.x1 + this.x2;
        break
    }
    this.turn1 = null;
   }



   //check if x1 or x2 has a number inside already (runs in every operation before applying code)
   check(){
    if (this.x1 == null){
      this.addedx1 = false;
    } else if (this.x2 == null){
      this.addedx2 = false;
    } else{
      this.addedx1 = true;
      this.addedx2 = true;  
    }
   }



   //clears all values when run
   clear(){
    this.addedx1 = false;
    this.addedx2 = false;
    this.ans = null;
    this.x1 = null;
    this.x2 = null;
    this.turn1 = true;
    console.log("Deleted bro")
   }

}
