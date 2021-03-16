<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{

    public function index()
    {
        return Property::all();
    }

    public function show(Property $property)
    {
        return new PropertyResource($property);
    }

    public function store(Request $request)
    {
        $property = Property::create($request->all());

        return response()->json($property, 201);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|unique:products|max:50',
            'description' =>  'required',
            'adress' => 'required',
            'price' => 'integer',
            'city' =>    'required'    ,
            'country' =>   'required'   ,
            'room' =>  'integer',
            'size' =>  'integer',
            'availability' => 'boolean',
        ]);
        $product = Property::create($request->all());

        return response()->json($product, 201);
    }

    public function update(Request $request, Property $property)
    {
        $property->update($request->all());

        return response()->json($property, 200);
    }

    public function delete(Property $property)
    {
        $property->delete();

        return response()->json(null, 204);
    }

}
