<?php

namespace Database\Factories;

use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Property::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();;
        return [
            'title' => "House",
            'description' => $faker->paragraph,
            'adress' => $faker->address,
            'price' => $faker->numberBetween(100000,5000000),
            'city' => $faker->city,
            'country' => $faker->country,
            'longitude' => $faker->longitude,
            'latitude' => $faker->latitude,
            'room' => $faker->numberBetween(1,10),
            'size' => $faker->numberBetween(50,5000),
            'image' => $faker->imageUrl(),
            'availability' => $faker->boolean(),
            'user_id' => $faker->numberBetween(1,15)
        ];
    }
}
