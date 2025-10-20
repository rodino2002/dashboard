import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"


const publicRoutes = [
    {path: '/login', whenAuthenticated: 'redirect'},

] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED = '/login'

export function middware(requests: NextRequest){
    const path = requests.nextUrl.pathname
    const puclicRoute = publicRoutes.find(route => route.path === path)
    const token = requests.cookies.get('token')

    if(!token && puclicRoute){
        return NextResponse.next()
    }
    if(!token && !puclicRoute){
        const redirectUrl = requests.nextUrl.clone()

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED
        return NextResponse.redirect(redirectUrl)
    }

    if(token && puclicRoute && puclicRoute.whenAuthenticated === 'redirect'){
        const redirectUrl = requests.nextUrl.clone()
        redirectUrl.pathname = '/'
        return NextResponse.redirect(redirectUrl)
    }

    if(token && !puclicRoute){
        // verificar se o token é valido ou está expirado
        // se não for valido ou estiver expirado, redirecionar para a página de login
        // se for valido, deixar passar
        return NextResponse.next()
    }

    return NextResponse.next()
}

export const config: MiddlewareConfig = {
    matcher: [
        /*
        * Match all request paths except for the ones starting with:
        * - api (API routes)
        * _ next/static (static files)
        * favicon.ico (favicon file)
        * login (login page)
        * register (register page)
        * public (public folder)
        * _ next/image (image optimization files)
        * _anything else in the root (root files)
        * * _ next (nextjs files)
        * * _ next/data (nextjs data files)
        * * _ next/static (nextjs static files)
        * * _ next/image (nextjs image files)
        * * _ next/font (nextjs font files)
        */
        '/((?!api|_next/static|favicon.ico|login|register|public|_next/image|.*\\.\\w+|_next|_next/data|_next/static|_next/image|_next/font).*)',
    ],
}
        ''