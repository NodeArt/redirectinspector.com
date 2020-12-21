/**
 * safe variant of JSON
 */
export class SafeJSON {
  /**
   * @param data
   * @param returnDefault
   */
  static parse<T> (data: string, returnDefault: T): T {
    return SafeJSON.safe<T>(returnDefault, () => {
      return JSON.parse(data);
    });
  }

  /**
   * @param data
   * @param returnDefault
   */
  static stringify (data: unknown, returnDefault = ''): string {
    return SafeJSON.safe<string>(returnDefault, () => {
      return JSON.stringify(data);
    });
  }

  /**
   * wrapping callback with try catch
   * and in case of exception return input param
   * @param input
   * @param callback
   */
  static safe<T> (input: T, callback: () => T): T {
    let result = input;
    try {
      result = callback();
    } catch (e) {
    }
    return result;
  }
}
