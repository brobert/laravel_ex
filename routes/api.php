<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) { return $request->user();})->middleware('auth:api');

Route::resource('task', 'ReacttaskController');

Route::get('/tasks', function (Request $request) {
    return [
        ['id' => 1, 'name' => 'task 1', 'description' => 'desc 1',              'status' => 'todo'    ],
        ['id' => 2, 'name' => 'task 2', 'description' => '',                    'status' => 'ready'   ],
        ['id' => 3, 'name' => 'task 3', 'description' => '',                    'status' => 'done'    ],
        ['id' => 4, 'name' => 'task 4', 'description' => 'other description',   'status' => 'ready'   ],

    ];
});
//     Route::post('/task/{taskid}', function($taskid, Request $request) {return [$taskid, $request->all()];});
