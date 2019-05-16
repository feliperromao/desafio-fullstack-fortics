<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Refrigerante extends Model
{
    public function sabor(){
        return $this->belongsTo('App\Sabor');
    }

    public function tipo(){
        return $this->belongsTo('App\Tipo');
    }

    public function litragem(){
        return $this->belongsTo('App\Litragem');
    }
}
