<?php

use Illuminate\Http\Request;

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

Route::resource('refrigerantes', 'RefrigeranteController');
Route::resource('tipos', 'TipoController');
Route::resource('litragens', 'LitragemController');
Route::resource('marcas', 'MarcaController');
Route::resource('sabor', 'SaborController');