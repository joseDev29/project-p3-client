import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ClientModel } from 'src/app/models/client/client.model';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements OnInit {
  clients: ClientModel[] = [];
  filterPost = '';
  config: PaginationInstance = {
    itemsPerPage: 11,
    currentPage: 1,
  };
  page: number = 1;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getAllRecords().subscribe(
      (clients) => {
        this.clients = clients;
        console.log(clients);
      },
      (err) => console.log
    );
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }
}
