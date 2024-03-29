<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\ProductCartCOntroller;
use App\Http\Controllers\Admin\FavouriteController;


use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\UserController;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// ///////// User Api login ////////////////
Route::post('/login', [AuthController::class, 'Login']);

Route::post('/register', [AuthController::class, 'Register']);

Route::post('/forgetpassword', [ForgetController::class, 'ForgetPassword']);

Route::post('/resetpassword', [ResetController::class, 'ResetPassword']);

Route::get('/user', [UserController::class, 'User'])->middleware('auth:api');
// ///////// End User Api login ////////////

// Get Visitor
Route::get('/getvisitor', [VisitorController::class, 'GetVisitorDetails']);
// Contact Page Route
Route::post('/postcontact', [ContactController::class, 'PostContactDetails']);
// Site Info Route
Route::get('/allsiteinfo', [SiteInfoController::class, 'AllSiteInfo']);
// ALl Category Route
Route::get('/allcategory', [CategoryController::class, 'AllCategory']);
// ProductList Route
Route::get('/productlistbyremark/{remark}', [ProductListController::class, 'ProductListByRemark']);
Route::get('/productlistbycategory/{category}', [ProductListController::class, 'ProductListByCategory']);
Route::get('/productlistbysubcategory/{category}/{subcategory}', [ProductListController::class, 'ProductListBySubCategory']);
// Slider Route
Route::get('/allslider', [SliderController::class, 'AllSlider']);

// Product details route
Route::get('/productdetails/{id}', [ProductDetailsController::class, 'ProductDetails']);

// Notification Route
Route::get('/notification', [NotificationController::class, 'NotificationHistory']);
// Search route
Route::get('/search/{key}', [ProductListController::class, 'ProductBySearch']);
// suggested product route
Route::get('/similar/{subcategory}', [ProductListController::class, 'SimilarProduct']);
// product review route
Route::get('/reviewlist/{product_code}', [ReviewController::class, 'ReviewList']);
Route::post('/postreview', [ReviewController::class, 'PostReview']);

// product cart route - add to cart
Route::post('/addtocart', [ProductCartCOntroller::class, 'AddToCart']);
// product cart route - shopping cart review
Route::get('/shoppingcartreview/{email}', [ProductCartCOntroller::class, 'ShoppingCartReview']);
Route::get('/shoppingcartremove/{id}', [ProductCartCOntroller::class, 'ShoppingCartRemove']);
// product cart route
Route::get('/cartcount/{product_code}', [ProductCartCOntroller::class, 'CartCount']);
// product cart plus +
Route::get('/cartitemplus/{id}/{quantity}/{price}', [ProductCartCOntroller::class, 'CartItemPlus']);
// product cart min -
Route::get('/cartitempminus/{id}/{quantity}/{price}', [ProductCartCOntroller::class, 'CartItemMinus']);




// Favourite Route
Route::get('/favourite/{product_code}/{email}',[FavouriteController::class, 'AddFavourite']);
Route::get('/favouritelist/{email}',[FavouriteController::class, 'FavouriteList']);
Route::get('/favouriteremove/{product_code}/{email}',[FavouriteController::class, 'FavouriteRemove']);


// Order Route - Cart Order
Route::post('/cartorder', [ProductCartCOntroller::class, 'CartOrder']);
// Order Route - Order History List 1
Route::get('/orderhistory/{email}', [ProductCartCOntroller::class, 'OrderHistory']);
