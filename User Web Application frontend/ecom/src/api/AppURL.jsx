class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api"

  static VisitorDetails = this.BaseURL+"/getvisitor"
  static PostContactDetails = this.BaseURL+"/postcontact"
  static AllSiteInfo = this.BaseURL+"/allsiteinfo"
  static AllCategoryDetails = this.BaseURL+"/allcategory"
  static ProductListByRemark(remark) {
    return this.BaseURL+"/productlistbyremark/"+remark
  }
  static ProductListByCategory(category) {
    return this.BaseURL+"/productlistbycategory/"+category
  }
  static ProductListBySubCategory(category, subcategory) {
    return this.BaseURL+"/productlistbysubcategory/"+category+"/"+subcategory
  }
  static AllSlider = this.BaseURL+"/allslider"

  static Login = this.BaseURL+"/login"
  static Register = this.BaseURL+"/register"
  static ForgetPassword = this.BaseURL+"/forgetpassword"
  static ResetPassword = this.BaseURL+"/resetpassword"
  static UserData = this.BaseURL+"/user"
  
  static NotificationHistory = this.BaseURL+"/notification"
  
  static ProductDetails(code) {
    return this.BaseURL+"/productdetails/"+code
  }
  static ProductBySearch(searchkey){
    return this.BaseURL+"/search/"+searchkey;
  }
  static SimilarProduct(subcategory){
    return this.BaseURL+"/similar/"+subcategory;
  }
  static ReviewProduct(id){
    return this.BaseURL+"/reviewlist/"+id;
  }
   
  static addToCart = this.BaseURL+"/addtocart"
}

export default AppURL

