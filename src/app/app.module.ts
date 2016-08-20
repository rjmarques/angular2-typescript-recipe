import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import { PuppiesComponent } from './puppies';
import { OttersComponent } from './otters';
import { KittensComponent } from './kittens';

@NgModule({
	declarations: [
		AppComponent,
		PuppiesComponent,
		OttersComponent,
		KittensComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	bootstrap: [AppComponent],
})

export class AppModule {}
