import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientModel } from "src/app/models/client/client.model";
import { FinancesModel } from "src/app/models/client/finances.model";
import { RequestModel } from "src/app/models/request/request.model";
import { ClientService } from "src/app/services/client/client.service";
import { RequestService } from "src/app/services/requests/request.service";




@Component({
    selector: 'app-client-page',
    templateUrl: './client-page.component.html',
    styleUrls: [
        './client-page.component.css'
    ]
})
export class ClientPageComponent implements OnInit {

    clientId:string;
    client:ClientModel;
    finances:FinancesModel;
    createFinancesBtn:false;
    requests:RequestModel[] = [];
    
    constructor(private route:ActivatedRoute, private clientService: ClientService){}

    ngOnInit(){
        this.getClient();
        this.getFinances();
        this.getRequests();
    }

    getClient(){
        this.clientId = this.route.snapshot.params['id']

        this.clientService.getRecordById(this.clientId)
            .subscribe(
                client => this.client = client,
                err => console.log
            )
    }

    getFinances(){
        this.clientService.getFinancesByClientId(this.clientId).subscribe(
            finances => this.finances = finances,
            err => console.log 
        )
    }

    getRequests(){
        this.clientService.getRequestsByClientId(this.clientId)     
            .subscribe(
                requests => this.requests = requests,
                err => console.log 
        )
    }

}