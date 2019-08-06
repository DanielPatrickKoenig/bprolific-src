import PixiManager from "../utils/PixiManager";
export default class DisplayElement{
  protected pm:PixiManager;
  constructor(_pm:PixiManager){
    this.pm = _pm;
  }
  public getBody():any{
    return {};
  }
  public setProperty(p:string, v:any){
    this.getBody()[p] = v;
  }
  public added(){

  }
  public removed(){

  }
}
