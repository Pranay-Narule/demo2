import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]

})
export class serverComponent{
    serverID=10; //severId: number = 10;
    serverState='offline';
    constructor(){
        this.serverState = Math.random() > 0.5 ? 'online' : 'offline';
    }


    getServerState(){
        return this.serverState;
    }
    getColor(){
        return this.serverState === 'online' ? 'green' : 'red';
    }
}