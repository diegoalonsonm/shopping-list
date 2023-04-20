import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner";
import {PlaceholderDirective} from "./placeholder/placeholder.directive";
import {DropdownDirectiveDirective} from "./dropdown-directive.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirectiveDirective
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirectiveDirective,
    CommonModule
  ]
})
export class SharedModule{}
