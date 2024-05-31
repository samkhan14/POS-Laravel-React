<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index(Request $request) // Adjust method signature if needed
    {
        // ... (Logic to retrieve all or filtered categories based on request parameters)
        $categories = Category::all(); // Or filtered results
        return response()->json($categories);
    }

    public function show(Category $category) // Injected by route binding
    {
        return response()->json($category);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:categories', // Adjust validation rules
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $category = Category::create($request->all());
        return response()->json($category, 201);
    }

    public function update(Request $request, Category $category) // Injected by route binding
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:categories,name,' . $category->id, // Adjust for unique validation
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $category->update($request->all());
        return response()->json($category);
    }

    public function destroy(Category $category) // Injected by route binding
    {
        $category->delete();
        return response()->json(null, 204); // No content
    }
}
