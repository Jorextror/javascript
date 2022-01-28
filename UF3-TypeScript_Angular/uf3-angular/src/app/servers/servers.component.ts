import { Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, DoCheck {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  username = ''; //string interpolation

  constructor() { 
    // setTimeout(() => {
    //   if (this.username != ""){
    //     this.allowNewServer = true;
    //   }
    // }, 2000);
  }
  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {

    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngDoCheck(): void{
    if(this.username===""){
      this.allowNewServer = false;
    }else{
      this.allowNewServer = true;
    }
  }
  vaciar(){ 
    this.username="";
  }
}
