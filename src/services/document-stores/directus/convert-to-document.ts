const converter = (record: any, collection?: string) => {
  return {
    identity: {
      id: record.id,
      kind: record.kind || collection,
    },
    payload: record,
  }
}

export const convertToDocument = (record: any, collection?: string) => {
  if (!record) {
    return undefined;
  }

  if (Array.isArray(record)) {
    return record.map((record: any) => converter(record, collection));
  }

  return converter(record, collection);
}