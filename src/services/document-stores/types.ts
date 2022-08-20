export interface DocumentIdentity {
  id: string;
  kind: string;
}

export interface Document {
  identity: DocumentIdentity;
  payload: Record<string, any>;
}

export type MutationRequest = MutationRequestParams | Array<MutationRequestParams>;
export interface MutationRequestParams {
  operation: 'add' | 'edit' | 'remove';
  identity: DocumentIdentity;
  payload: Record<string, any>;
}

export type GetRequest = GetRequestParams | Array<GetRequestParams>;
export interface GetRequestParams {
  identity: DocumentIdentity;
}

export interface SearchRequest {
  kind: string;
  filter: {
    [key: string]: any;
  }
}

export interface CommandParams {
  command: 'mutate' | 'get' | 'search';
  params: MutationRequest | GetRequest | SearchRequest
}