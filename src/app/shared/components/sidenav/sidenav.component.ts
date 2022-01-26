import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public change = false
  public icon = 'arrow_forward_ios';

public changeIcon(newIcon: boolean) { 

  this.change= newIcon; 

  if (this.change == true){
    this.icon = 'arrow_back_ios'
    this.change = true
  }else this.icon = 'arrow_forward_ios';
}

  constructor() { }

  ngOnInit(): void {
  }

}
