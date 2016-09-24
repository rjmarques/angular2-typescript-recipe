import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }   from './app.component';
import { PuppiesComponent } from './puppies';
import { OttersComponent } from './otters';
import { KittensComponent } from './kittens';

import { SharedModule } from './shared';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		BrowserModule,		
		SharedModule,
		routing
	],
	declarations: [
		AppComponent,
		PuppiesComponent,
		OttersComponent,
		KittensComponent
	],
	providers: [
		appRoutingProviders
	], 
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}
