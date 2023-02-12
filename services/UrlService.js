let apiDomain = "";
if (process.env.NODE_ENV === "production") {
  apiDomain = "https://api-dummy-url/";
} else {
  apiDomain = "http://localhost:8000/";
}

// List of api service URLs - Central point of truth

class UrlService {
  static isUserLoggedIn() {
    return apiDomain + "api/userloginstatus";
  }
  static currentUserProfileUrl() {
    return apiDomain + "api/user";
  }
  static saveUserProfileUrl() {
    return apiDomain + "api/user";
  }
  static getProductList() {
    return apiDomain + "api/productlist";
  }
}

export default UrlService;