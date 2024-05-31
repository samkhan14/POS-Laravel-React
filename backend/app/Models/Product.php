<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'category_id',
        'brand_id',
        'buying_price',
        'selling_price',
        'quantity',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class); // Assuming your Category model exists
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class); // Assuming your Brand model exists
    }
}
