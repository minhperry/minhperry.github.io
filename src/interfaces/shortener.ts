export type ShortenerResponse = CreatedResponse | ErrorResponse;

export interface CreatedResponse {
  created: {
    [key: string]: string;
  }
}

export interface ErrorResponse {
    error: string;
}