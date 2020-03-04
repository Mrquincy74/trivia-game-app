import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NewsComponent } from './news.component'

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [NewsComponent]
})
export class NewsModule { }
