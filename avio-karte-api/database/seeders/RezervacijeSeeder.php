<?php

namespace Database\Seeders;

use App\Models\Rezervacija;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RezervacijeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();



        for ($j = 1; $j <= 10000; $j++) {

            $letId = $faker->numberBetween(1, 1000);
            $userId = $faker->numberBetween(1, 10);

            \App\Models\Rezervacija::create([
                'let_id' => $letId,
                'user_id' => $userId,
                'vreme_rezervacije' => $faker->dateTimeBetween('-1 month', 'now'),
                'status' => $faker->randomElement([Rezervacija::STATUS_REZERVISANO, Rezervacija::STATUS_OTKAZANO])
            ]);
        }
    }

}
