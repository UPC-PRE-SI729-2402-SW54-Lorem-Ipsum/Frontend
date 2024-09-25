import {Component, OnInit} from '@angular/core';
import {Client} from "../../model/client";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrl: './current-user.component.css'
})
export class CurrentUserComponent implements OnInit {
  client: Client = new Client();

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getClientById(0).subscribe((data: any) => {
      this.client = data;
    });
  }


}
