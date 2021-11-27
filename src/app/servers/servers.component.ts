import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = false;
  inputName = '';
  servers = ['server-1','server-2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onAddServer(){
    // this.serverCreationStatus= 'server created with name ' + this.inputName;
    this.serverCreated = true;
    this.servers.push(this.inputName);
  }

  onInput(event: Event){
    this.inputName = (<HTMLInputElement>event.target).value;
  }

}
