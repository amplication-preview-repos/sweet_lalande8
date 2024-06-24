import { Response as TResponse } from "../api/response/Response";

export const RESPONSE_TITLE_FIELD = "submittedAnswer";

export const ResponseTitle = (record: TResponse): string => {
  return record.submittedAnswer?.toString() || String(record.id);
};
