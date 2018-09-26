import {Component, EventEmitter, Output} from '@angular/core';
import { Response } from '@angular/http';
import {DataStroageService} from '../../share/data-stroage.service';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private datastroage: DataStroageService,
    private authservices: AuthService
  ) {}

  @Output() selectedLink = new EventEmitter<string>();
  onSelect(feature: string) {
    this.selectedLink.emit(feature);
  }

  onSave() {
    this.datastroage.storeRecipe()
      .subscribe(
        (responce: Response) => {
          console.log(responce);
        }
      );
  }

  onFetch() {
    this.datastroage.getRecipe();
  }

  onLogOut() {
    this.authservices.logout();
  }
}
