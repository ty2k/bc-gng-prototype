import DOMPurify from "dompurify";

function sanitize(input) {
  return DOMPurify.sanitize(input);
}

export const textService = {
  sanitize,
};
