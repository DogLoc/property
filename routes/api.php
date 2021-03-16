<?php

use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;

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

Route::middleware('auth:api')->group(function() {

    Route::get('properties', function () {
        return response(PropertyController::all(),200);
    });

    Route::get('properties/{property}', function ($propertyId) {
        return response(PropertyController::find($propertyId), 200);
    });


    Route::post('properties', function(Request $request) {
        $resp = PropertyController::create($request->all());
        return $resp;

    });

    Route::put('properties/{property}', function(Request $request, $propertyId) {
        $property = PropertyController::findOrFail($propertyId);
        $property->update($request->all());
        return $property;
    });

    Route::delete('properties/{property}',function($propertyId) {
        PropertyController::find($propertyId)->delete();
        return 204;
    });



    Route::get('properties', 'App\Http\Controllers\PropertyController@index');

    Route::get('properties/{property}', 'App\Http\Controllers\PropertyController@show');

    Route::post('properties','App\Http\Controllers\PropertyController@store');

    Route::put('properties/{property}','App\Http\Controllers\PropertyController@update');

    Route::delete('properties/{property}', 'App\Http\Controllers\PropertyController@delete');
});

Route::middleware('api')->prefix('auth')->namespace('App\Http\Controllers\Auth')->group(function() {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});







