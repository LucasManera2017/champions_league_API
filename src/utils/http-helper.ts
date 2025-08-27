import { HttpResponse } from "../models/http-response-model"

export const ok = (data:any): HttpResponse => {
  return {
    statusCode: 200,
    body: data
  }
}

export const noContent = (): HttpResponse => {
  return {
    statusCode: 204,
    body: null
  }
}