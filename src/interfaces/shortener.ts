export type ShortenerResponse = CreatedResponse | ErrorResponse;

export interface CreatedResponse {
  created: Record<string, string>
}

export interface ErrorResponse {
    error: string;
}

export type ListResponse = ListResult | ErrorResponse;

export interface ListResult {result: ListEntry[]}

export interface ListEntry {
  key: string,
  url: string
}