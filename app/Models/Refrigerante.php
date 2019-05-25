<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Refrigerante extends Eloquent
{
    public function sabor(){
        return $this->belongsTo('App\Models\Sabor');
    }

    public function tipo(){
        return $this->belongsTo('App\Models\Tipo');
    }

    public function litragem(){
        return $this->belongsTo('App\Models\Litragem');
    }
}
