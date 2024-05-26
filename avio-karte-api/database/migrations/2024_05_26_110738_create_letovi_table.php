<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('letovi', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('avio_kompanija_id');
            $table->unsignedBigInteger('aerodrom_polazak_id');
            $table->unsignedBigInteger('aerodrom_dolazak_id');
            $table->dateTime('vreme_polaska');
            $table->dateTime('vreme_dolaska');
            $table->decimal('cena_karte', 10, 2);
            $table->integer('broj_karata');

            $table->foreign('avio_kompanija_id')->references('id')->on('avio_kompanije');
            $table->foreign('aerodrom_polazak_id')->references('id')->on('aerodromi');
            $table->foreign('aerodrom_dolazak_id')->references('id')->on('aerodromi');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('letovi');
    }
};
