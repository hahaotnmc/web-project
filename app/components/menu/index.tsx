import { Link } from "@remix-run/react";

export default function Menu (){
   
    return( <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
        {/* Tiêu đề */}
        <Link to={'/'} className="text-white text-2xl font-bold tracking-wide">
          Trang chủ
        </Link>

        {/* Nút giỏ hàng */}
        <Link to={'/cart'} className="relative flex items-center bg-white text-indigo-500 hover:text-white hover:bg-indigo-600 transition-all duration-300 ease-in-out rounded-full px-4 py-2 shadow-md">
          {/* Icon SVG */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>

          {/* Text */}
          <span className="ml-2 font-medium">Giỏ hàng</span>

          {/* Badge số lượng sản phẩm */}
          <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
            3
          </span>
        </Link>
      </header>);
}