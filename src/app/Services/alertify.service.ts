import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }
confirm(message:string,okCallBack:()=>any,title:string){
  alertify.confirm(message,function(e){
  if(e){okCallBack()}else{}
 });
 setTimeout(()=>{
  document.getElementsByClassName("ajs-header")[0].innerHTML = title;
 },0);
}

success(message :string){
  alertify.success(message);
}

error(message :string){
  alertify.error(message);
}
warning(message :string){
  alertify.warning(message);
}
message(message :string){
  alertify.message(message);
}

}