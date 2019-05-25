<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sabor;

class SaborController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sabores = Sabor::all();
        return response($sabores);
    }

}
