import DisplayElementContainer from './DisplayElementContainer';
import PixiManager from '../utils/PixiManager';
export default class ContainerElement extends DisplayElementContainer{
  private container:any;
  constructor(_pm:PixiManager, _x:number, _y:number){
    super(_pm);
    this.container = new this.pm._PIXI.Sprite();
    this.container.x = _x;
    this.container.y = _y;
  }
  public getBody(){
    return this.getContainer();
  }
  protected getContainer(){
    return this.container;
  }
}
