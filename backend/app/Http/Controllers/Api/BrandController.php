<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
    public function index(Request $request) // Adjust method signature if needed
    {
        // ... (Logic to retrieve all or filtered categories based on request parameters)
        $categories = Brand::all(); // Or filtered results
        return response()->json($categories);
    }

    public function show(Brand $brand) // Injected by route binding
    {
        return response()->json($brand);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:categories', // Adjust validation rules
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $brand = Brand::create($request->all());
        return response()->json($brand, 201);
    }

    public function update(Request $request, Brand $brand) // Injected by route binding
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:categories,name,' . $brand->id, // Adjust for unique validation
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $brand->update($request->all());
        return response()->json($brand);
    }

    public function destroy(Brand $category) // Injected by route binding
    {
        $category->delete();
        return response()->json(null, 204); // No content
    }
}
