import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/subject';

import { CONFIG } from './config';
import { ToastService } from './toast';

export interface ResetMessage {
  message: string;
}

@Injectable()
export class MessageService {
  private subject = new Subject<ResetMessage>();

  state = this.subject;

  constructor(private http: Http, private toastService: ToastService) { }

  resetDb() {
    let msg = 'Reset the Data Successfully';
    this.http.post(CONFIG.baseUrls.resetDb, null)
      .subscribe(() => {
        this.subject.next({ message: msg });
        this.toastService.activate(msg);
      });
  }
}
