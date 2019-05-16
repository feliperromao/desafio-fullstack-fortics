<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TiposSeeder::class);
        $this->call(LitragensSeeder::class);
        $this->call(MarcasSeeder::class);
        $this->call(SaboresSeeder::class);
    }
}
