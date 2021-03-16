<?php

namespace Database\Seeders;

use App\Models\Property;
use Illuminate\Database\Seeder;

class PropertyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Property::withoutEvents(function () {
            for ($i = 0; $i<10; $i++) {
                Property::factory()->create();
            }
        });
    }
}
