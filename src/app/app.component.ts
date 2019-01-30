import { Component } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prime-ng';

  public samples: any[] = [
    {
      id: 1,
      name: 'Nombre 1',
      image: 'number_1.png'
    },
    {
      id: 2,
      name: 'Nombre 2',
      image: 'number_2.png'
    },
    {
      id: 3,
      name: 'Nombre 3',
      image: 'number_3.png'
    },
    {
      id: 4,
      name: 'Nombre 4',
      image: 'number_4.png'
    },
    {
      id: 5,
      name: 'Nombre 5',
      image: 'number_5.png'
    },
  ];

  public value = 20;

  constructor(private confirmationService: ConfirmationService,
      private messageService: MessageService) { }

  public showMessage(data: any): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Hello',
      detail: 'Call from buttom of the row ' + data.id
    });
  }

  public deleteRow(data: any): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this row?',
      accept: () => {
        console.log('Delete the row');
        const rows = [...this.samples];
        this.samples = [];
        rows
          .filter((item: any) =>  item.id !== data.id )
          .forEach((item: any) => { this.samples.push(item); });
      },
      reject: () => {
        console.log('Reject the confirmation. Do nothing');
      }
    });
  }

  public showErrorMessage(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Sample Error',
      detail: message
    });
  }

  public showConfirmDialog() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        console.log('Acept the confirmation');
      },
      reject: () => {
        console.log('Reject the confirmation');
      }
    });
  }

  public changeProgressValue() {
    if (this.value <= 25) {
      this.value = 50;
    } else if (this.value <= 75) {
      this.value = 85;
    } else {
      this.value = 20;
    }
  }
}
