<?php

namespace App\Http\Middleware;

use Closure;

class VerifyCsrfToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->session()->token() !== $request->input('_token')) {
            abort(419);
        }

        return $next($request);
    }
}
