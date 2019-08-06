import PolygonElement from './PolygonElement';
import PixiManager from '../utils/PixiManager';
import Plotter from '../utils/Plotter';
export default class HexElement extends PolygonElement {
  constructor(_pm:PixiManager,props:any){
    super(_pm, new Plotter().regular(0,0,6,(props && props.radius ? props.radius : 20)), props);
  }
}

