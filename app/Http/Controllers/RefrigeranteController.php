<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Refrigerante;

class RefrigeranteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $where = array();
        if( $request->litragem ) $where['litragem_id'] = $request->litragem;

        $refrigerantes = Refrigerante::with('sabor', 'tipo', 'litragem')
                        ->where($where)
                        ->where('marca', 'like', "%$request->marca%")
                        ->where('valor', '>=', $request->valor_min ? $request->valor_min : 0 )
                        ->where('valor', '<=', $request->valor_max ? $request->valor_max : 9999999999999 )
                        ->where('quantidade', '>=', $request->quantidade_min ? $request->quantidade_min : 0 )
                        ->where('quantidade', '<=', $request->quantidade_max ? $request->quantidade_max : 9999999999999 )
                        ->paginate(10);

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

        if( !$valor OR !$quantidade OR !$marca OR !$tipo_id OR !$sabor_id OR !$litragem_id ){
            $response = array('message' => 'Por favor informe os camos obrigatórios');
            return response($response, 400);
        }

        $refrigerante = new Refrigerante();
        $refrigerante->valor = $valor;
        $refrigerante->quantidade = $quantidade;
        $refrigerante->marca = $marca;
        $refrigerante->tipo_id = $tipo_id;
        $refrigerante->sabor_id = $sabor_id;
        $refrigerante->litragem_id = $litragem_id;

        if( $refrigerante->save() ){
            return response($refrigerante, 201);
        }else{
            $message = 'Náo foi possivel adicionar o refrigerante,
                        verifique se ja existe um refrigerante com a mesma marca e litragem';
            $response = array('message' => $message);
            return response($response, 500);
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

        $valor =        $request->input('valor');
        $quantidade =   $request->input('quantidade');
        $marca =        $request->input('marca');
        $tipo_id =      $request->input('tipo_id');
        $sabor_id =     $request->input('sabor_id');
        $litragem_id =  $request->input('litragem_id');

        if( !$valor OR !$quantidade OR !$marca OR !$tipo_id OR !$sabor_id OR !$litragem_id ){
            $response = array('message' => 'Por favor informe os camos obrigatórios.');
            return response($response, 400);
        }

        $refrigerante = Refrigerante::where('id', $id)->first();

        if(!$refrigerante){
            $response = array('Refrigerante náo encontrado');
            return response($response, 404);
        }

        $refrigerante->valor = $valor;
        $refrigerante->quantidade = $quantidade;
        $refrigerante->marca = $marca;
        $refrigerante->tipo_id = $tipo_id;
        $refrigerante->sabor_id = $sabor_id;
        $refrigerante->litragem_id = $litragem_id;

        if( $refrigerante->save() ){
            return response($refrigerante);
        }else{
            $message = 'Náo foi possivel atualizar o refrigerante,
                        verifique se ja existe um refrigerante com a mesma marca e litragem';
            $response = array('message' => $message);
            return response($response, 500);
        }


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
