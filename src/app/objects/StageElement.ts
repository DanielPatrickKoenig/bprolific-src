import DisplayElementContainer from "./DisplayElementContainer";
import PixiManager from '../utils/PixiManager';
import DisplayElement from './DisplayElement';
export default class StageElement extends DisplayElementContainer{
  constructor(_pm:PixiManager, _el:HTMLElement, _width:number, _height:number){
    super(_pm);
    this.pm.init(_el, _width, _height, 0xffffff);
  }
  protected getContainer():any{
    return this.pm.app.stage;
  }
}
