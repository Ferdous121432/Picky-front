class Constants {
  static API_BASE_URL = "https://api.shopperoo.com";
  static TIMEOUT = 5000;
  static MAX_RETRIES = 3;

  //COLORS
  static AMBER_50 = "#fefce8";
  static AMBER_100 = "#fef3c7";
  static AMBER_200 = "#fde68a";
  static PRIMARY_COLOR = "#FFD700";
  static WHITE_PRIMARY = "#f8fafc";
  static WHITE_SECONDARY = "#e2e8f0";
  static BLACK_PRIMARY = "#0f172a";
  static BLACK_SECONDARY = "#334155";
  static EMARALD_PRIMARY = "#065f46";
  static EMARALD_SECONDARY = "#059669";
  static YELLOW_PRIMARY = "#ca8a04";
  static YELLOW_SECONDARY = "#fde047";
  static EMARALD_TRANS = "rgba(6, 95, 70, .01)";

  static getApiEndpoint(endpoint) {
    return `${this.API_BASE_URL}/${endpoint}`;
  }
}

export default Constants;
