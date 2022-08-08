<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductCart;
use App\Models\ProductList;
use App\Models\CartOrder;

class ProductCartCOntroller extends Controller
{
    public function AddToCart(Request $request) {
        $email = $request->input('email');
        $size = $request->input('size');
        $color = $request->input('color');
        $quantity = $request->input('quantity');
        $product_code= $request->input('product_code');

        $productDetails = ProductList::where('product_code',$product_code)->get();
        $price = $productDetails[0]['price'];
        $special_price = $productDetails[0]['special_price'];

        if($special_price == 'na') {
            $total_price = $price*$quantity;
            $unit_price = $price;
        } else {
            $total_price = $special_price*$quantity;
            $unit_price = $special_price;
        }

        $result = ProductCart::insert([

            'email' => $email,
            'image' => $productDetails[0]['image'],
            'product_name' => $productDetails[0]['title'],
            'product_code' => $productDetails[0]['product_code'],
            'size' => "Size: ".$size,
            'color' => "Color: ".$color,
            'quantity' => $quantity,
            'unit_price' => $unit_price,
            'total_price' => $total_price,

        ]);

        return $result;
    }


    public function CartCount(Request $request) {
        $product_code = $request->product_code;
        $result = ProductCart::count();
        return $result;
    } // End Method

    public function ShoppingCartReview(Request $request) {
        $email = $request->email;
        $result = ProductCart::where('email', $email)->get();

        return $result;
    }
    public function ShoppingCartRemove(Request $request) {
        $id = $request->id;
        $result = ProductCart::where('id', $id)->delete();

        return $result;
    }

    public function CartItemPlus(Request $request) {
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity+1;
        $total_price = $newQuantity*$price;
        $result = ProductCart::where('id', $id)->update(['quantity' => $newQuantity, 'total_price' => $total_price]);
        return $result;

    }

    public function CartItemMinus(Request $request) {
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity-1;
        $total_price = $newQuantity*$price;
        $result = ProductCart::where('id', $id)->update(['quantity' => $newQuantity, 'total_price' => $total_price]);
        return $result;

    }

    public function CartOrder(Request $request) {
       $city = $request->input('city');
       $paymentMethod = $request->input('payment_method');
       $yourName = $request->input('name');
       $email = $request->input('email');
       $DeliveryAddress = $request->input('delivery_address');
       $DeliveryCharge = $request->input('delivery_charge');
       $invoice_no = $request->input('invoice_no');

       date_default_timezone_set("Europe/Amsterdam");
       $request_time = date("h:i:sa");
       $request_date = date("d-m-Y");

       $CartList = ProductCart::where('email', $email)->get();

       foreach($CartList as $CartListItem) {
            $cartInsertDeleteResult = '';

            $resultInsert = CartOrder::insert([
                'city' => $city,
                'payment_method' => $paymentMethod,
                'name' => $yourName,
                'email' => $email,
                'delivery_address' => $DeliveryAddress,
                'delivery_charge' => $DeliveryCharge,
                'invoice_no' => $invoice_no,

                'order_date' => $request_date,
                'order_time' => $request_time,
                'order_status' => "Pending",

                'product_name' => $CartListItem['product_name'],
                'product_code' => $CartListItem['product_code'],
                'size' => $CartListItem['size'],
                'color' => $CartListItem['color'],
                'quantity' => $CartListItem['quantity'],
                'unit_price' => $CartListItem['unit_price'],
                'total_price' => $CartListItem['total_price'],
            ]);

            if($resultInsert == 1) {
                $resultDelete = ProductCart::where('id', $CartListItem['id']);
                if($resultDelete == 1) {
                    $cartInsertDeleteResult = 1;
                } else {
                    $cartInsertDeleteResult = 0;
                }
            }

            return $cartInsertDeleteResult;
       } // end foreach


    }

}
