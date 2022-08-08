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

   
  static addToCart = this.BaseURL+"/addtocart";

  static ShoppingCartReview(email){
    return this.BaseURL+"/shoppingcartreview/"+email;
  }
  static ShoppingCartRemove(id){
    return this.BaseURL+"/shoppingcartremove/"+id;
  }
  static CartItemPlus(id,quatity,price){
    return this.BaseURL+"/cartitemplus/"+id+"/"+quatity+"/"+price;
  }
  static CartItemMinus(id,quatity,price){
    return this.BaseURL+"/cartitempminus/"+id+"/"+quatity+"/"+price;
  }

  static CartOrder = this.BaseURL+"/cartorder";



  static CartCount(product_code){
    return this.BaseURL+"/cartcount/"+product_code;
  }
  static AddToFavourite(product_code, email){
    return this.BaseURL+"/favourite/"+product_code+"/"+email;
  }
  static FavouriteList(email){
    return this.BaseURL+"/favouritelist/"+email;
  }
  static FavouriteRemove(product_code, email){
    return this.BaseURL+"/favouriteremove/"+product_code+"/"+email;
  }
}

export default AppURL

