<?php

namespace Database\Factories;

use App\Models\Product;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'buying_price' => fake()->numberBetween(100, 1000),
            'selling_price' => fake()->numberBetween(100, 1000),
            'quantity' => fake()->numberBetween(1, 100),
            'description' => fake()->sentence(45),
            'category_id' => fake()->numberBetween(1, 20),
            'brand_id' => fake()->numberBetween(1, 10),
            'created_at' => now(),
            'updated_at' => now(),
        ];

    }


}
