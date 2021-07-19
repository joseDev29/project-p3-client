import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BlockModel } from 'src/app/models/project/block.model';

@Component({
  selector: 'app-list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.css']
})
export class ListBlockComponent implements OnInit {
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
