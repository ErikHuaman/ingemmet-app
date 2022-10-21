import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import {  Message } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {
  private _msg: Subject<Message> = new Subject();
  private _loading: Subject<boolean> = new Subject();

  constructor() {
    
  }
  subsMessage(): Observable<Message> {
    return this._msg.asObservable();
  }

  subsLoading(): Observable<boolean> {
    return this._loading.asObservable();
  }
  
  loading(loading: boolean) {
    this._loading.next(loading);
  }

  addMsg(msg: Message) {
    this._msg.next(msg);
  }
}
