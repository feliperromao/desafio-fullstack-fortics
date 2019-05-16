<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableRefrigerantes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('refrigerantes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->float('valor');
            $table->integer('quantidade');
            $table->string('marca', 30);
            $table->unsignedBigInteger('tipo_id');
            $table->unsignedBigInteger('sabor_id');
            $table->unsignedBigInteger('litragem_id');
            $table->timestamps();

            $table->foreign('tipo_id')->references('id')->on('tipos');
            $table->foreign('sabor_id')->references('id')->on('sabores');
            $table->foreign('litragem_id')->references('id')->on('litragens');

            $table->unique(['marca', 'litragem_id'], 'unique_marca');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('refrigerantes');
    }
}
