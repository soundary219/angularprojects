import { Component, OnInit Input//<--added this
} from '@angular/core';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() name: string //<-- added input annotation

  constructor() { }

  ngOnInit() {
  }

}
