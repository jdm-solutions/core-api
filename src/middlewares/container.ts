export const container = (container: any) => {
  return (request: any, response: any, next: any) => {
    request.container = container;
    next();
  }
}