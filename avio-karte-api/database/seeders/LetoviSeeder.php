<?php

namespace Database\Seeders;

use App\Models\Let;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LetoviSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $faker = \Faker\Factory::create();

        for ($i = 1; $i <= 1000; $i++) {

            $vremePolaska = $faker->dateTimeBetween('now', '+2 month');
            //add random number of hours to vremePolaska
            $vremeDolaska = (clone $vremePolaska)->add(new \DateInterval('PT' . $faker->numberBetween(1, 10) . 'H'));

            Let::create([
                'avio_kompanija_id' => $faker->numberBetween(1, 15),
                'aerodrom_polazak_id' => $faker->numberBetween(1, 41),
                'aerodrom_dolazak_id' => $faker->numberBetween(1, 41),
                'vreme_polaska' => $vremePolaska,
                'vreme_dolaska' => $vremeDolaska,
                'cena_karte' => $faker->numberBetween(100, 1000),
                'broj_karata' => $faker->numberBetween(50, 200)
            ]);
        }
    }
}
