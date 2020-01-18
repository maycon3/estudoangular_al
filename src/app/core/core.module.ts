import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeardComponent } from './heard/heard.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeardComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [HeardComponent]
})
export class CoreModule {}