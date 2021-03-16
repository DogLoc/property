<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'adress' => $this->adress,
            'price' => $this->price,
            'city' => $this->city,
            'country' => $this->country,
            'longitude' => $this->longitude,
            'latitude' => $this->latitude,
            'room' => $this->room,
            'size' => $this->size,
            'image' => $this->image,
            'availability' => $this->availability,
            'user_id' => $this->user_id,
        ];
    }
}
