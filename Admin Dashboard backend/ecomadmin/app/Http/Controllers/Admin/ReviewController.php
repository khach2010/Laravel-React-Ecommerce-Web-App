<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductPreview;

class ReviewController extends Controller
{
    public function ReviewList(Request $request) {
        $product_code = $request->product_code;
        $result = ProductPreview::where('product_code', $product_code)->orderBy('id', 'desc')->limit(4)->get();
        return $result;
    }
    public function PostReview(Request $request) {
       $product_name = $request->product_name;
       $product_code = $request->product_code;
       $user_name = $request->reviewer_name;
       $reviewer_photo = $request->reviewer_photo;
       $reviewer_rating = $request->reviewer_rating;
       $reviewer_comments = $request->reviewer_comments;

       $result = ProductPreview::insert([
        'product_name' => $product_name,
        'product_code' => $product_code,
        'reviewer_name' => $user_name,
        'reviewer_photo' => $reviewer_photo,
        'reviewer_rating' => $reviewer_rating,
        'reviewer_comments' => $reviewer_comments,
       ]);

        return $result;
    }



}
