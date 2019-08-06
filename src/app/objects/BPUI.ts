import ContainerElementWithInterval from './ContainerElementWithInterval';
import PixiManager from '../utils/PixiManager';
import CircleElement from './CircleElement';
import FlexPoint from '../utils/FlexPoint';
import HexElement from './HexElement';
import FlexHex from './FlexHex';
export default class BPUI extends ContainerElementWithInterval{
  private mousePos:{x:number, y:number};
  private cir:CircleElement;
  private fp:FlexPoint;
  private fh:FlexHex;
  constructor(_pm:PixiManager){
    super(_pm, 0, 0);
    this.mousePos = {x: 0, y: 0};
    let self = this;
    document.addEventListener('mousemove', (e) => {
      self.mousePos = {x: e.pageX, y: e.pageY};
    });

    this.fh = new FlexHex(this.pm,200,400,{color: 0x000000, x: 0, y: 0, radius:90},180,60);
    this.addChild(this.fh);
    // let hex = new HexElement(this.pm, {color: 0x000000, x: 200, y: 100, radius:90});
    // this.addChild(hex);
    // this.cir = new CircleElement(this.pm, {color: 0x000000, x: 0, y: 0, radius: 10});
    // this.addChild(this.cir);
    // this.fp = new FlexPoint(0,0,80,110,false);
  }
  public redraw(target:any){
    target.fh.update(target.mousePos);

    // target.fp.reposition(target.mousePos);
    // target.cir.setProperety('x', target.fp.getPosition().x);
    // target.cir.setProperety('y', target.fp.getPosition().y);

    // console.log(target.fp.getPosition());
    // console.log(target.mousePos);
    // target.addChild(new CircleElement(target.pm, {color: 0x000000, x: target.mousePos.x, y: target.mousePos.y, radius: 10}));
  }
}
