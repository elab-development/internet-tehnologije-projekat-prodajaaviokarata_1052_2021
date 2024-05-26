<?php

namespace Database\Seeders;

use App\Models\AvioKompanija;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AvioKompanijeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $avioKompanije = [
            'Air Serbia',
            'Wizz Air',
            'Ryanair',
            'Lufthansa',
            'Turkish Airlines',
            'Emirates',
            'Qatar Airways',
            'Etihad Airways',
            'Aeroflot',
            'British Airways',
            'Air France',
            'KLM',
            'Swiss International Air Lines',
            'Austrian Airlines',
            'LOT Polish Airlines',
        ];

        foreach ($avioKompanije as $avioKompanija) {
            AvioKompanija::create([
                'naziv_kompanije' => $avioKompanija
            ]);
        }
    }
}
