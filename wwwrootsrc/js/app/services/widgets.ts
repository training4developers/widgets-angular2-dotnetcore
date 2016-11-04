import { Injectable } from '@angular/core';
import { BaseRestClient } from './base-rest-client';
import { AuthorizedHttp } from './authorized-http';
import { Widget } from '../models/widget';

@Injectable()
export class Widgets extends BaseRestClient<Widget> {

	constructor(http: AuthorizedHttp) {
		super(http, 'widgets');
	}
}