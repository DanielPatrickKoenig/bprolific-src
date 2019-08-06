import HexElement from './HexElement';
import PixiManager from '../utils/PixiManager';
import FlexPoint from '../utils/FlexPoint';
import ContainerElement from './ContainerElement';

export default class FlexHex extends ContainerElement{
  private flexPoints:Array<FlexPoint>;
  private hex:HexElement;
  private offset:{x:number,y:number};
  constructor(_pm:PixiManager,x:number,y:number,props:any,range:number,growth:number){
    super(_pm,x,y);
    console.log(this.pm.getHTMLElement().getBoundingClientRect());
    this.offset = {x:x+this.pm.getHTMLElement().getElementsByTagName('canvas')[0].getBoundingClientRect().left,y:y+this.pm.getHTMLElement().getElementsByTagName('canvas')[0].getBoundingClientRect().top};
    this.hex = new HexElement(this.pm,props);
    this.addChild(this.hex);
    this.flexPoints = new Array<FlexPoint>();
    let startPoints = this.hex.getPoints();
    for(let i = 0;i<startPoints.length;i++){
      this.flexPoints.push(new FlexPoint(startPoints[i].x, startPoints[i].y,range,growth));
    }
  }
  public update(mp:{x:number,y:number}){
    let updatedPoints:Array<{x:number,y:number}> = new Array<{x:number,y:number}>();
    let refactoredMP:{x:number,y:number} = {x:mp.x-this.offset.x,y:mp.y-this.offset.y};
    for(let i = 0;i<this.flexPoints.length;i++){
      this.flexPoints[i].reposition(refactoredMP);
      updatedPoints.push(this.flexPoints[i].getPosition());
      // this.flexPoints.push(new FlexPoint(startPoints.x, startPoints.y,range,growth));
    }
    this.hex.redraw(updatedPoints);
  }
}
