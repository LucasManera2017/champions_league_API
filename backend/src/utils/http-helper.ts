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

export const badRequest = (): HttpResponse => {
  return {
    statusCode: 400,
    body: null
  }
}

export const created = (): HttpResponse => {
  return {
    statusCode: 201,
    body: null
  }
}