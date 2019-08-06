import ContainerElement from './ContainerElement';
import PixiManager from '../utils/PixiManager';
import {TweenLite} from 'gsap';
export default class ContainerElementWithInterval extends ContainerElement{
  private tVals:{a:number, min:number, max:number};
  constructor(_pm:PixiManager, _x:number, _y:number, _interval:number = 30){
    super(_pm, _x, _y);
    // this.redraw();
    this.tVals = {a:0, min: 0, max: 10};
    this.doTween(this.tVals, this.doTween, this.redraw, this);
    // setInterval(this.redraw, _interval);
  }
  private doTween(tVals:{a:number, min:number, max:number}, complete, update, target){
    console.log('do tween called');
    let targetA = tVals.a == tVals.min ? tVals.max : tVals.min;
    TweenLite.to(tVals, 0.5, {a: targetA, onComplete: complete, onCompleteParams: [tVals, complete, update, target], onUpdate: update, onUpdateParams: [target]});
  }
  protected redraw(target:any){

  }
}
