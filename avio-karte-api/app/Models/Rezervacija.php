<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rezervacija extends Model
{
    use HasFactory;

    public const STATUS_REZERVISANO = 'REZERVISANO';
    public const STATUS_OTKAZANO = 'OTKAZANO';
    public const STATUS_NOVO = 'NOVO';
    protected $table = 'rezervacije';

    protected $fillable = [
        'let_id',
        'user_id',
        'vreme_rezervacije',
        'status'
    ];

    //relationships
    public function let()
    {
        return $this->belongsTo(Let::class, 'let_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
