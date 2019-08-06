import {Component} from '@angular/core';
import PixiManager from '../../utils/PixiManager';
import StageElement from '../../objects/StageElement';
import ContainerElement from '../../objects/ContainerElement';
import CircleElement from '../../objects/CircleElement';
import BPUI from '../../objects/BPUI';
@Component({
  selector: 'main-nav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export default class MainNav {
  elID:string = 'element-' + Math.random().toString().split('.').join('') + Math.random().toString().split('.').join('') + Math.random().toString().split('.').join('')
  pm:PixiManager;
  stage:StageElement;
  ngAfterViewInit(){
    this.pm = new PixiManager();
    this.stage = new StageElement(this.pm, document.getElementById(this.elID), 800, 800);
    this.stage.addChild(new BPUI(this.pm));
    // let con = new ContainerElement(this.pm, 120, 200);
    // this.stage.addChild(con);
    // let cir = new CircleElement(this.pm, {color: 0xff0000, radius: 20, x: 200, y: 250});
    // con.addChild(cir);
  }
}
