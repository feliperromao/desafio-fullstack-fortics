<?php

use Illuminate\Database\Seeder;

class RefrigeranteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('refrigerantes')->insert([
            'marca' => 'Coca Cola',
            'valor' => 8.50,
            'quantidade' => 300,
            'tipo_id' => 1,
            'sabor_id' => 1,
            'litragem_id' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Coca Cola',
            'valor' => 8.50,
            'quantidade' => 300,
            'tipo_id' => 1,
            'sabor_id' => 1,
            'litragem_id' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Pepsi Cola',
            'valor' => 6.50,
            'quantidade' => 100,
            'tipo_id' => 1,
            'sabor_id' => 1,
            'litragem_id' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Frevo Cola',
            'valor' => 6.00,
            'quantidade' => 80,
            'tipo_id' => 1,
            'sabor_id' => 1,
            'litragem_id' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Frevo Cola',
            'valor' => 6.00,
            'quantidade' => 80,
            'tipo_id' => 1,
            'sabor_id' => 1,
            'litragem_id' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Frevo Cola',
            'valor' => 6.00,
            'quantidade' => 80,
            'tipo_id' => 2,
            'sabor_id' => 1,
            'litragem_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Fanta Laranja',
            'valor' => 5.80,
            'quantidade' => 130,
            'tipo_id' => 1,
            'sabor_id' => 4,
            'litragem_id' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Fanta Laranja',
            'valor' => 5.80,
            'quantidade' => 130,
            'tipo_id' => 1,
            'sabor_id' => 2,
            'litragem_id' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Fanta Laranja',
            'valor' => 5.80,
            'quantidade' => 130,
            'tipo_id' => 2,
            'sabor_id' => 2,
            'litragem_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Sprok Maçã',
            'valor' => 9.98,
            'quantidade' => 680,
            'tipo_id' => 3,
            'sabor_id' => 6,
            'litragem_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Sprok Maçã',
            'valor' => 9.98,
            'quantidade' => 680,
            'tipo_id' => 3,
            'sabor_id' => 6,
            'litragem_id' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Sprok Maçã',
            'valor' => 9.98,
            'quantidade' => 680,
            'tipo_id' => 1,
            'sabor_id' => 6,
            'litragem_id' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Guaraná Antartica',
            'valor' => 9.98,
            'quantidade' => 680,
            'tipo_id' => 3,
            'sabor_id' => 6,
            'litragem_id' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('refrigerantes')->insert([
            'marca' => 'Guaraná Antartica',
            'valor' => 9.98,
            'quantidade' => 680,
            'tipo_id' => 2,
            'sabor_id' => 4,
            'litragem_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
