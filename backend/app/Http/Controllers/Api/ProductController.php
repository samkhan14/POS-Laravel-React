<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductBatchRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products); // Return all products as JSON
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|integer|exists:categories,id',
            'brand_id' => 'required|integer|exists:brands,id',
            'buying_price' => 'required|numeric|min:0',
            'selling_price' => 'required|numeric|min:' . $request->buying_price . '|gte:buying_price',
            'quantity' => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422); // Return validation errors with status code 422
        }

        $product = Product::create($request->all());
        return response()->json($product, 201); // Return created product with status code 201
    }

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json($product); // Return a specific product as JSON
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Product $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|integer|exists:categories,id',
            'brand_id' => 'required|integer|exists:brands,id',
            'buying_price' => 'required|numeric|min:0',
            'selling_price' => 'required|numeric|min:' . $request->buying_price . '|gte:buying_price',
            'quantity' => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422); // Return validation errors with status code 422
        }

        $product->update($request->all());
        return response()->json($product); // Return updated product as JSON
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204); // Return empty response with status code 204 (No Content)
    }

    // add product batch
    public function addProductBatch(StoreProductBatchRequest $request, Product $product)
    {
        $validator = Validator::make($request->all(), [
            'product_id' => 'required|numeric|' . $product->id,
            'buying_price' => 'required|numeric|min:0',
            'selling_price' => 'required|numeric|min:' . $request->buying_price . '|gte:buying_price',
            'quantity' => 'required|integer|min:0',
            'import_quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422); // Return validation errors with status code 422
        }

        $product->update($request->all());
        return response()->json($product); // Return updated product as JSON
    }
}
