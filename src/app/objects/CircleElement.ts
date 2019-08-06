import DisplayElement from './DisplayElement';
import PixiManager from '../utils/PixiManager';

export default class CircleElement extends DisplayElement{
  private c:any;
  constructor(_pm:PixiManager, props:object){
    super(_pm);
    this.c = this.pm.createCircle(props);
  }
  public getBody(){
    return this.c;
  }
}
