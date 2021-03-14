<?php

namespace Database\Seeders;

use App\Models\Property;
use App\Models\User;
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

        User::withoutEvents(function () {
            for ($i = 0; $i<15; $i++) {
                User::factory()->create();
            }
        });

        Property::withoutEvents(function () {
            for ($i = 0; $i<10; $i++) {
                Property::factory()->create();
            }
        });
    }
}
