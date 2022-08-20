import { Directus } from "@directus/sdk";

import { env } from '../../../environment'
import { convertToDocument } from './convert-to-document';
import * as types from './types';
import * as storeTypes from '../types';

export class DirectusStore {
  _client: Directus<types.DirectusStore>;

  constructor() {
    this._client = new Directus<types.DirectusStore>(env.DIRECTUS_URL, {
      auth: {
        staticToken: env.DIRECTUS_TOKEN
      }
    })
  }

  async command(params: storeTypes.CommandParams) {
    if (params.command === 'mutate') {
      return await this.mutate(params.params as storeTypes.MutationRequest);
    }

    if (params.command === 'get') {
      return await this.get(params.params as storeTypes.GetRequest);
    }

    if (params.command === 'search') {
      return await this.search(params.params as storeTypes.SearchRequest);
    }
  }

  async mutate(params: storeTypes.MutationRequest) {
    if (Array.isArray(params)) {
      throw new Error("Not Implemented Yet");
    }

    const root = this._client.items(params.identity.kind);

    if (params.operation === 'add') {
      const directusParams: any = params.payload;

      if (params.identity.id) {
        directusParams.id = params.identity.id;
      }

      await root.createOne(directusParams);
    }

    if (params.operation === 'edit') {
      await root.updateOne(params.identity.id, params.payload);
    }

    if (params.operation === 'remove') {
      await root.deleteOne(params.identity.id);
    }
  }

  async get(params: storeTypes.GetRequest) {
    if (Array.isArray(params)) {
      const kind = params[0].identity.kind;

      const response = await this._client.items(kind).readMany(params.map((param: storeTypes.GetRequestParams) => {
        return param.identity.id
      }));

      return convertToDocument(response.data, kind)
    }

    const response = await this._client.items(params.identity.kind).readOne(params.identity.id);
    return convertToDocument(response, params.identity.kind);
  }

  async search(params: storeTypes.SearchRequest) {
    const response = await this._client.items(params.kind).readByQuery({
      filter: params.filter,
    });

    return convertToDocument(response.data, params.kind);
  }
}