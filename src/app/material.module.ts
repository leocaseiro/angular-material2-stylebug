import {NgModule} from "@angular/core";
import {
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdExpansionModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule
} from "@angular/material";

let components = [
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdInputModule,
    MdExpansionModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule
];

@NgModule({
    exports: components
})
export class MaterialModule {
}
