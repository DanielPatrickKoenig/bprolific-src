import Trig from './Trig';
export default class Plotter{
  private trig:Trig;
  constructor(){
    this.trig = new Trig();
  }
  public regular(x:number, y:number, corners:number, radius:number):Array<{x:number,y:number}>{
    let pnts:Array<{x:number,y:number}> = new Array<{x:number,y:number}>();
    for(let i = 0; i<corners;i++){
      pnts.push(
        {
          x: this.trig.orbit(x,radius,(360/corners)*i,this.trig.OrbitType.COS),
          y: this.trig.orbit(y,radius,(360/corners)*i,this.trig.OrbitType.SIN)
        }
      )
    }
    return pnts;
  }
}
