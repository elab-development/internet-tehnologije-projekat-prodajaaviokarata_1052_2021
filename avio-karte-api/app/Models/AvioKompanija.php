<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AvioKompanija extends Model
{
    use HasFactory;

    protected $table = 'avio_kompanije';

    protected $fillable = [
        'naziv_kompanije'
    ];

    //relationship
    public function letovi()
    {
        return $this->hasMany(Let::class, 'avio_kompanija_id');
    }
}
