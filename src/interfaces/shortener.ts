export type ShortenerResponse = CreatedResponse | ErrorResponse;

export interface CreatedResponse {
  created: {
    [key: string]: string;
  }
}

export interface ErrorResponse {
    error: string;
}

export type ListResponse = ListResult | ErrorResponse;

export type ListResult = {result: ListEntry[]}

export interface ListEntry {
  key: string,
  url: string
}