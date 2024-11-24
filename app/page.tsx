export default function Home() {
  return (
    <main className="flex flex-wrap justify-center w-full h-screen gap-20 p-20 bg-rose-100 bg-opacity-60 *:px-5 *:py-10">
      {/** screen 1 */}
      <div className="w-full max-w-sm bg-white">
        <h1 className="mb-10 text-5xl font-extrabold">Weather</h1>
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex relative w-full p-7 justify-between items-start rounded-xl border-2 border-b-8 border-black">
            <div className="text-2xl font-extrabold">Casius</div>
            <div className="absolute top-1/2 text-sm font-semibold">
              Mars, 12AM
            </div>
            <div className="absolute size-16 right-32 top-6 ">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                ></path>
              </svg>
            </div>
            <div className="text-5xl font-extrabold">
              85<span className="font-normal">&deg;</span>
            </div>
          </div>
          <div className="flex relative w-full p-7 justify-between items-start rounded-xl border-2 border-b-8 border-black bg-yellow-400">
            <div className="text-2xl font-extrabold">Dlacria</div>
            <div className="absolute top-1/2 text-sm font-semibold">
              Mars, 12AM
            </div>
            <div className="absolute size-16 right-32 top-6 ">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                ></path>
              </svg>
            </div>
            <div className="text-5xl font-extrabold">
              85<span className="font-normal">&deg;</span>
            </div>
          </div>
          <div className="flex relative w-full p-7 justify-between items-start rounded-xl border-2 border-b-8 border-black bg-green-400">
            <div className="text-2xl font-extrabold">New York</div>
            <div className="absolute top-1/2 text-sm font-semibold">
              USA, 12AM
            </div>
            <div className="absolute size-16 right-32 top-6 ">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                ></path>
              </svg>
            </div>
            <div className="text-5xl font-extrabold">
              85<span className="font-normal">&deg;</span>
            </div>
          </div>
          <div className="flex relative w-full p-7 justify-between items-start rounded-xl border-2 border-b-8 border-black bg-red-500 text-white">
            <div className="text-2xl font-extrabold">Zomato</div>
            <div className="absolute top-1/2 text-sm font-semibold">
              India, 12AM
            </div>
            <div className="absolute size-16 right-32 top-6 ">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                ></path>
              </svg>
            </div>
            <div className="text-5xl font-extrabold">
              20<span className="font-normal">&deg;</span>
            </div>
          </div>
        </div>
        <div className="border-2 border-black border-b-4 w-12 h-12 rounded-full flex justify-center items-center mx-auto">
          <button className="text-4xl font-medium">+</button>
        </div>
      </div>
      {/** screen 2 */}
      <div className="w-full max-w-sm bg-white">
        <div className="flex items-center justify-center border-2 border-black border-b-4 w-12 h-12 rounded-full mb-4">
          <button className="text-4xl font-medium">x</button>
        </div>
        <div className="text-center text-lg font-extrabold text-gray-600 mb-4">
          <span>SIMPLE TAG</span>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-wide">
            Work with best designers
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="h-44 border-2 bg-yellow-400 border-black rounded-lg flex justify-center items-center">
            <svg
              className="size-16 text-white"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
          <div className="h-44 border-2 bg-green-400 border-black rounded-lg flex justify-center items-center">
            <svg
              className="size-16 text-white"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
          <div className="h-44 border-2 bg-pink-400 border-black rounded-lg flex justify-center items-center">
            <svg
              className="size-16 text-white"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
          <div className="h-44 border-2 bg-red-500 border-black rounded-lg flex justify-center items-center">
            <svg
              className="size-16 text-white"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-blue-700 h-12 rounded-xl flex justify-center items-center">
          <button className="text-white text-xl font-bold">
            Let&apos;s get it done
          </button>
        </div>
      </div>
      {/** screen 3 */}
      <div className="w-full max-w-sm bg-yellow-400">
        <div className="flex items-center gap-20 mb-4">
          <div className="flex items-center justify-center border-2 border-black border-b-4 w-12 h-12 rounded-full mb-4 bg-white">
            <button className="text-4xl font-medium">&lt;</button>
          </div>
          <h1 className="text-3xl font-extrabold">Friends</h1>
        </div>
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search with love ..."
            className="w-full px-4 py-3 rounded-xl border-2 border-b-8 border-black text-xl"
          />
          <button className="absolute right-2 top-3">
            <svg
              className="size-8"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white border-black border-2 rounded-xl p-3 flex justify-between items-center">
            <div className="rounded-full size-16 bg-red-500 border-2 border-black "></div>
            <div className="text-2xl font-bold">
              <span>Bill Rizer</span>
              <p className="text-sm text-gray-500">Planet Designer</p>
            </div>
            <div></div>
            <div></div>
            <div className="bg-amber-400 border-2 border-b-4 rounded-xl border-black px-2 py-1 h-10">
              <button className="font-bold">invite</button>
            </div>
          </div>
          <div className="bg-white border-black border-2 rounded-xl p-3 flex justify-between items-center">
            <div className="rounded-full size-16 bg-green-400 border-2 border-black "></div>
            <div className="text-2xl font-bold">
              <span>Genbei Yagy</span>
              <p className="text-sm text-gray-500">Planet Designer</p>
            </div>
            <div></div>
            <div></div>
            <div className="bg-amber-400 border-2 border-b-4 rounded-xl border-black px-2 py-1 h-10">
              <button className="font-bold">invite</button>
            </div>
          </div>
          <div className="bg-white border-black border-2 rounded-xl p-3 flex justify-between items-center">
            <div className="rounded-full size-16 bg-red-500 border-2 border-black "></div>
            <div className="text-2xl font-bold">
              <span>Lancy Neo</span>
              <p className="text-sm text-gray-500">Rogue Corp</p>
            </div>
            <div></div>
            <div></div>
            <div className="bg-black text-white border-2 border-b-4 rounded-xl border-black px-2 py-1 h-9">
              <button className="font-bold">invited</button>
            </div>
          </div>
          <div className="bg-white border-black border-2 rounded-xl p-3 flex justify-between items-center">
            <div className="rounded-full size-16 bg-yellow-400 border-2 border-black "></div>
            <div className="text-2xl font-bold">
              <span>Bill Rizer</span>
              <p className="text-sm text-gray-500">Planet Designer</p>
            </div>
            <div></div>
            <div></div>
            <div className="bg-amber-400 border-2 border-b-4 rounded-xl border-black px-2 py-1 h-10">
              <button className="font-bold">invite</button>
            </div>
          </div>
          <div className="bg-white border-black border-2 rounded-xl p-3 flex justify-between items-center">
            <div className="rounded-full size-16 bg-pink-400 border-2 border-black "></div>
            <div className="text-2xl font-bold">
              <span>Konami</span>
              <p className="text-sm text-gray-500">Hard Cops</p>
            </div>
            <div></div>
            <div></div>
            <div className="bg-amber-400 border-2 border-b-4 rounded-xl border-black px-2 py-1 h-10">
              <button className="font-bold">invite</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
