/*
 * Copyright: Ambrosus Inc.
 * Email: tech@ambrosus.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { Request } from 'express';
import { injectable } from 'inversify';
import { getTimestamp } from '../../util';

export interface IOrganizationRequest {
  _id: string;
  address: string;
  title: string;
  email: string;
  message: string;
  createdOn: number;
  refused: boolean;
}

@injectable()
export class OrganizationRequest implements IOrganizationRequest {
  public static fromRequest(req: Request) {
    const organizationRequest = new OrganizationRequest();
    if (undefined !== req.body['title']) {
      organizationRequest.title = req.body.title;
    }
    if (undefined !== req.body['address']) {
      organizationRequest.address = req.body.address;
    }
    if (undefined !== req.body['email']) {
      organizationRequest.email = req.body.email;
    }
    if (undefined !== req.body['message']) {
      organizationRequest.message = req.body.message;
    }
    return organizationRequest;
  }

  public _id: string;
  public address: string;
  public title: string;
  public email: string;
  public message: string;
  public createdOn: number;
  public refused: boolean;

  public setCreationTimestamp() {
    this.createdOn = getTimestamp();
  }
}