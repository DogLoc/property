<?php

use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('properties', function () {
    return response(Property::all(),200);
});

Route::get('properties/{property}', function ($propertyId) {
    return response(Property::find($propertyId), 200);
});


Route::post('properties', function(Request $request) {
    $resp = Property::create($request->all());
    return $resp;

});

Route::put('properties/{property}', function(Request $request, $propertyId) {
    $property = Property::findOrFail($propertyId);
    $property->update($request->all());
    return $property;
});

Route::delete('properties/{property}',function($propertyId) {
    Property::find($propertyId)->delete();
    return 204;
});
