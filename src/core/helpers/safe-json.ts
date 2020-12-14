/**
 * safe variant of JSON
 */
export class SafeJSON {
  /**
   * @param data
   * @param returnDefault
   */
  static parse(data: string, returnDefault = {}) {
    return SafeJSON.safe(returnDefault, () => {
      return JSON.parse(data);
    });
  }

  /**
   * @param data
   * @param returnDefault
   */
  static stringify(data: object, returnDefault = '') {
    return SafeJSON.safe(returnDefault, () => {
      return JSON.stringify(data);
    });
  }

  /**
   * wrapping callback with try catch
   * and in case of exception return input param
   * @param input
   * @param callback
   */
  static safe(input, callback) {
    let result = input;
    try {
      result = callback();
    } catch (e) {
    }
    return result;
  }
}
