import DisplayElement from './DisplayElement';
import PixiManager from '../utils/PixiManager';

export default class PolygonElement extends DisplayElement{
  private p:any;
  private properties:any
  private graphics:any;
  private pointList:Array<{x:number,y:number}>;
  constructor(_pm:PixiManager, points:Array<{x:number,y:number}>, props:any, g:any = null){
    super(_pm);
    this.properties = props;
    this.graphics = g ? g : new this.pm._PIXI.Graphics();
    this.p = this.pm.createPolygon(points, this.properties, this.graphics);
    this.pointList = points;
  }
  public getBody(){
    return this.p;
  }
  public redraw(points:Array<{x:number,y:number}>){
    this.p.clear();
    this.pointList = points;
    this.p = this.pm.createPolygon(points, this.properties, this.graphics);
  }
  public getPoints():Array<{x:number,y:number}>{
    return this.pointList;
  }
}
