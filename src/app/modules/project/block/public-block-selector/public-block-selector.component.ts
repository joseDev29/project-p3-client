import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

import { BlockModel } from 'src/app/models/project/block.model';

@Component({
  selector: 'app-public-block-selector',
  templateUrl: './public-block-selector.component.html',
  styleUrls: ['./public-block-selector.component.css']
})
export class PublicBlockSelectorComponent implements OnInit {
  @Input() blocks: BlockModel[] = [];
  @Input() activeBlock: BlockModel;
  @Output() onChangeBlock:EventEmitter<BlockModel>=new EventEmitter()
  constructor() {

  }

  ngOnInit(): void {
  }
  changeBlock(event: any) {
    let id = event.target.value;
    for (let i = 0; i < this.blocks.length; i++) {
      if (id == this.blocks[i].id) {
        this.onChangeBlock.emit(this.blocks[i])
        break;
      }
    }
  }
}
