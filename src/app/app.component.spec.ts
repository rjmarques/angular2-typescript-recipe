import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from './shared';

import { AppComponent } from './app.component';

import { PuppiesComponent } from './puppies';
import { OttersComponent } from './otters';
import { KittensComponent } from './kittens';

describe('App', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({			
			imports: [
				RouterTestingModule,
				SharedModule
			],
			declarations: [
				AppComponent,
				PuppiesComponent,
				OttersComponent,
				KittensComponent
			]
		});
	});
	it ('should work', () => {
		let fixture = TestBed.createComponent(AppComponent);
		expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
	});
});