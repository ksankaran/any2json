/**
 * The purpose of this method is to return a JSON object while
 * safely handling the possibility its a JSON object already or
 * not a string.
 * If object, it is a JSON already and hence, it returns as such
 * If string, it tries to parse to JSON and returns the result.
 * If anything else, the function returns a JSON object with value
 * stored across key (optional, defaults to `value`).
 * 
 * @param input: string|object input that needs conversion to object
 */
function parse(input: any, key: string = 'value'): object {
  const EMPTY: object = {};
  let obj: { [index:string] : any } = {};
  if (!input) return EMPTY;
  if (typeof input === 'object') return input;

  try {
    obj = JSON.parse(input);
  } catch(err) {
    obj[key] = input;
  }
  return obj;
}

export = parse;
