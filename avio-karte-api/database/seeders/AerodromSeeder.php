<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AerodromSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $aerodromi = [
            ['Beograd Nikola Tesla', 'BEG'],
            ['Zagreb Franjo Tuđman', 'ZAG'],
            ['Sarajevo Butmir', 'SJJ'],
            ['Podgorica Golubovci', 'TGD'],
            ['Skopje Aleksandar Veliki', 'SKP'],
            ['Ljubljana Jože Pučnik', 'LJU'],
            ['Tivat', 'TIV'],
            ['Dubrovnik Čilipi', 'DBV'],
            ['Split', 'SPU'],
            ['Zadar', 'ZAD'],
            ['Pula', 'PUY'],
            ['Rijeka', 'RJK'],
            ['Osijek', 'OSI'],
            ['Banja Luka', 'BNX'],
            ['Mostar', 'OMO'],
            ['Tuzla', 'TZL'],
            ['Niš Konstantin Veliki', 'INI'],
            ['Priština Adem Jashari', 'PRN'],
            ['Ohrid', 'OHD'],
            ['Tirana Nënë Tereza', 'TIA'],
            ['Budimpešta Ferenc Liszt', 'BUD'],
            ['Beč Švehat', 'VIE'],
            ['Bratislava M. R. Štefánik', 'BTS'],
            ['Prag Václav Havel', 'PRG'],
            ['Varšava Frederic Chopin', 'WAW'],
            ['Berlin Brandenburg', 'BER'],
            ['Minhen F. J. Strauß', 'MUC'],
            ['Frankfurt na Majni', 'FRA'],
            ['Dizeldorf', 'DUS'],
            ['Keln Bon', 'CGN'],
            ['Hamburg', 'HAM'],
            ['Stuttgart', 'STR'],
            ['Zurich', 'ZRH'],
            ['Ženeva', 'GVA'],
            ['Pariz Šarl de Gol', 'CDG'],
            ['Amsterdam Šipol', 'AMS'],
            ['London Hitrou', 'LHR'],
            ['London Getvik', 'LGW'],
            ['London Stensted', 'STN'],
            ['London Luton', 'LTN'],
            ['London Siti', 'LCY'],
            ['London Sautend', 'SEN'],
        ];

        foreach ($aerodromi as $aerodrom) {
            \App\Models\Aerodrom::create([
                'naziv' => $aerodrom[0],
                'skracenica' => $aerodrom[1]
            ]);
        }
    }
}
