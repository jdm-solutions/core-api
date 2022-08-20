import { DirectusStore, getMinioClient } from './services';

export const getContainer = () => {
  const directus = new DirectusStore();
  const minio = getMinioClient();

  return {
    documentStore: directus,
    minio: minio,
  }
}
