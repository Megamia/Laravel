<?php

namespace App\Http\Controllers\Action\DashBoard;

use App\Http\Controllers\Controller;
use App\Models\DashBoard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DashBoardController extends Controller
{

    public function addUser(Request $request)
    {
        $data = $request->only(['name', 'email', 'createdate', 'permission']);

        $existingUser = DashBoard::where('email', $data['email'])->first();
        if ($existingUser) {
            return response()->json(['message' => 'User already exists'], 201);
        }

        $user = DashBoard::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'createdate' => $data['createdate'],
            'permission' => $data['permission']
        ]);

        return response()->json([
            'message' => 'User has been add to DashBoard', 'data' => $user
        ], 200);
    }


    public function updateUser(Request $request)
    {
        $newData = $request->only(['name', 'email', 'createdate', 'permission']);

        
            $data = DashBoard::find($request->id);

            $data->name = $newData['name'];
            $data->email = $newData['email'];
            $data->permission = $newData['permission'];
            $data->createdate = $newData['createdate'];

            $data->save();

            return response()->json(['message' => 'User updated successfully.', 'data' => $data], 200);
        
    }


    public function deleteUser(Request $request)
    {
        $data = $request->only('userid');
        $userid = $data['userid'];

        $user = DashBoard::where('id', $userid)->delete();

        if ($user) {
            return response()->json(['message' => 'Người dùng đã được xóa thành công'], 200);
        } else {
            return response()->json(['message' => 'Không thể xóa người dùng'], 201);
        }
    }
    public function data(Request $request)
    {
        $users = DashBoard::all();
        if (count($users) > 0) {
            return response()->json(['data' => $users]);
        } else {
            return response()->json(['message' => 'No users found.']);
        }
    }
}
