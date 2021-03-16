<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
 {
     Schema::create('properties', function (Blueprint $table) {
         $table->increments('id');
         $table->timestamps();
         $table->string('title');
         $table->longText('description');
         $table->text('adress');
         $table->bigInteger('price');
         $table->text('city');
         $table->text('country');
         $table->text('longitude')->nullable();;
         $table->text('latitude')->nullable();;
         $table->integer('room');
         $table->integer('size');
         $table->string('image')->nullable();
         $table->boolean('availability');
         $table->foreignId('user_id')
                ->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');
     });
 }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
