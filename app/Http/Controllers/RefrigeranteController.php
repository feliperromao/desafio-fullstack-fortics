<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Refrigerante;

class RefrigeranteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $refrigerantes = Refrigerante::with('sabor', 'tipo', 'litragem')->paginate(10);

        return response($refrigerantes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $valor =        $request->input('valor');
        $quantidade =   $request->input('quantidade');
        $marca =        $request->input('marca');
        $tipo_id =      $request->input('tipo_id');
        $sabor_id =     $request->input('sabor_id');
        $litragem_id =  $request->input('litragem_id');
        $created_at =   date('Y-m-d H:i:s');
        $updated_at =   date('Y-m-d H:i:s');

        if( !$valor OR !$quantidade OR !$marca OR !$tipo_id OR !$sabor_id OR !$litragem_id ){
            $response = array('message' => 'Por favor informe os camos obrigatórios');
            return response($response, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $refrigerante = Refrigerante::where('id', $id)->first();
        return response($refrigerante);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = Refrigerante::where('id', $id)->delete();
        if( $deleted ){
            $response = array('message' => 'Excluido com sucesso');
            return response($response);
        }
    }
}
