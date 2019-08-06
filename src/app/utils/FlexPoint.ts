import Trig from './Trig';
export default class FlexPoint{
  private suspendMotion:boolean;
  private pointLocation:{x:number, y:number};
  private activePointLocation:{x:number, y:number};
  private range:number;
  private growth:number;
  private mousePos:{x:number, y:number};
  private easePosition:{x:number, y:number};
  private trig:Trig;
  constructor(_x:number, _y:number, _range:number, _growth:number, _suspendMotion:boolean = false) {
    this.trig = new Trig();
    this.suspendMotion = _suspendMotion;
    this.pointLocation = {x: _x, y: _y}
    // var activePointLocation
    this.range = _range
    this.growth = _growth
    this.mousePos = {x: 0, y: 0}
    this.easePosition = {x: _x, y: _y}
  }
  public setMousePos(_mp:{x:number, y:number}){
    this.mousePos = _mp
  }
  public reposition(_mp:{x:number, y:number}){
    this.mousePos = _mp
    if (!this.suspendMotion) {
      let pAngle = this.trig.angle(this.mousePos, this.pointLocation) - 90;
      let avtiveXVal:number = this.trig.orbit(this.pointLocation.x, this.growth, pAngle, this.trig.OrbitType.COS);
      let avtiveYVal:number = this.trig.orbit(this.pointLocation.y, this.growth, pAngle, this.trig.OrbitType.SIN);
      this.activePointLocation = {x: avtiveXVal, y: avtiveYVal};
      // let pointToTarget = this.trig.distance(this.pointLocation, this.mousePos) < this.range ? this.activePointLocation : this.pointLocation;
      let pointToTarget = this.pointLocation
      if (this.trig.distance(this.pointLocation, this.mousePos) < this.range) {
        pointToTarget = this.activePointLocation
      }
      let updatedX = this.easePosition.x + ((pointToTarget.x - this.easePosition.x) / 5);
      var updatedY = this.easePosition.y + ((pointToTarget.y - this.easePosition.y) / 5);
      this.easePosition.x = updatedX.toString().toLowerCase() === 'nan' ? this.easePosition.x : updatedX;
      this.easePosition.y = updatedY.toString().toLowerCase() === 'nan' ? this.easePosition.y : updatedY;
      // if (this.easePosition.x.toString().toLowerCase() === 'nan' || this.easePosition.y.toString().toLowerCase() === 'nan') {
      //   alert('Not a Number!!!!!')
      // }
    }
  }
  public getPosition():{x:number, y:number}{
    return this.easePosition;
  }
}
// function FlexPoint (_x, _y, _range, _growth, _suspendMotion) {
//   var suspendMotion = _suspendMotion
//   var pointLocation = {x: _x, y: _y}
//   var activePointLocation
//   var range = _range
//   var growth = _growth
//   var mousePos = {x: 0, y: 0}
//   var easePosition = {x: _x, y: _y}
//   this.setMousePos = function (_mousePos) {
//     mousePos = _mousePos
//   }
//   this.reposition = function (_mousePos) {
//     mousePos = _mousePos
//     if (!suspendMotion) {
//       var pAngle = getAngle(mousePos.x, mousePos.y, pointLocation.x, pointLocation.y)
//       var avtiveXVal = getOrbit(pointLocation.x, growth, pAngle, 'cos')
//       var avtiveYVal = getOrbit(pointLocation.y, growth, pAngle, 'sin')
//       activePointLocation = {x: avtiveXVal, y: avtiveYVal}
//       var pointToTarget = pointLocation
//       if (getDistance(pointLocation.x, pointLocation.y, mousePos.x, mousePos.y) < range) {
//         pointToTarget = activePointLocation
//       }
//       var updatedX = easePosition.x + ((pointToTarget.x - easePosition.x) / 5)
//       var updatedY = easePosition.y + ((pointToTarget.y - easePosition.y) / 5)
//       easePosition.x = updatedX.toString().toLowerCase() === 'nan' ? easePosition.x : updatedX
//       easePosition.y = updatedY.toString().toLowerCase() === 'nan' ? easePosition.y : updatedY
//       if (easePosition.x.toString().toLowerCase() === 'nan' || easePosition.y.toString().toLowerCase() === 'nan') {
//         alert('Not a Number!!!!!')
//       }
//     }
//   }
//   this.getPosition = function () {
//     return easePosition
//   }
// }
