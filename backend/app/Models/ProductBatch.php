<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductBatch extends Model
{
    protected $table = 'product_batches';
    use HasFactory;
    protected $fillable = [
        'product_id',
        'buying_price',
        'selling_price',
        'quantity',
        'import_quantity',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
