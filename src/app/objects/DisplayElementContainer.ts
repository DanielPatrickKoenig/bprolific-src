import PixiManager from "../utils/PixiManager";
import DisplayElement from './DisplayElement';
export default class DisplayElementContainer extends DisplayElement{
  constructor(pm:PixiManager){
    super(pm);
  }
  public addChild(de:DisplayElement):DisplayElement{
    this.getContainer().addChild(de.getBody());
    de.added();
    return de;
  }
  public removeChild(de:DisplayElement):DisplayElement{
    this.getContainer().removeChild(de.getBody());
    de.removed();
    return de;
  }
  protected getContainer():any{
    return {}
  }
}
