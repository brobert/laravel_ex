<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reacttask extends Model
{
    protected $fillable = ['name', 'description', 'status'];
}
