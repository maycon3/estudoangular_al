import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeardComponent } from './heard/heard.component';

@NgModule({
    declarations: [HeardComponent],
    imports: [CommonModule],
    exports: [HeardComponent]
})
export class CoreModule {}