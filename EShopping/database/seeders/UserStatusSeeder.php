<?php

namespace Database\Seeders;

use App\Models\Users_status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Users_status::insert([
            ['name' => '0'],
            ['name' => '1'],
        ]);
    }
}
