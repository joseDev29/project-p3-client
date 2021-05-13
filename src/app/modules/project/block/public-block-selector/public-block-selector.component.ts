import { Component, Input, OnInit } from '@angular/core';
import { BlockModel } from 'src/app/models/project/block.model';

@Component({
  selector: 'app-public-block-selector',
  templateUrl: './public-block-selector.component.html',
  styleUrls: ['./public-block-selector.component.css']
})
export class PublicBlockSelectorComponent implements OnInit {
  @Input('blocks') blocks:BlockModel[]=[];
  activatedBlock:BlockModel;
  constructor() { 

  }

  ngOnInit(): void {
    this.activatedBlock=this.blocks[0];
  }

}
