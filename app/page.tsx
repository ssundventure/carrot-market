export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen p-14 bg-orange-500">
      <div className="bg-white w-full h-full max-w-96 p-5 rounded-3xl">
        <div className="flex place-items-end gap-1 text-sm pt-10">
          March 2021
          <svg
            className="size-3 text-gray-400"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </div>
        <div className="bg-gray-400 h-px mt-2" />
        <div className="text-center font-medium pt-7">
          <p>Hello, Bruno! </p>
          <p>Your medicines for today</p>
        </div>
        <div className="pt-8 flex gap-4 justify-center items-center text-center">
          <div className="hover:bg-sky-400 rounded-2xl p-2 transition-colors">
            <div className="text-2xl font-semibold">16</div>{" "}
            <div className="pt-2 text-xs">Mon</div>
          </div>
          <div className="hover:bg-sky-400 rounded-2xl p-2 transition-colors">
            <div className="text-2xl font-semibold">17</div>{" "}
            <div className="pt-2 text-xs">Tue</div>
          </div>
          <div className="hover:bg-sky-400 rounded-2xl p-2 transition-colors">
            <div className="text-2xl font-semibold">18</div>{" "}
            <div className="pt-2 text-xs">Wed</div>
          </div>
          <div className="hover:bg-sky-400 rounded-2xl p-2 transition-colors">
            <div className="text-2xl font-semibold">19</div>{" "}
            <div className="pt-2 text-xs">Thu</div>
          </div>
          <div className="hover:bg-sky-400 rounded-2xl p-2 transition-colors">
            <div className="text-2xl font-semibold">20</div>{" "}
            <div className="pt-2 text-xs">Fri</div>
          </div>
          <div className="hover:bg-sky-400 rounded-2xl p-2 transition-colors">
            <div className="text-2xl font-semibold">21</div>{" "}
            <div className="pt-2 text-xs">Sat</div>
          </div>
        </div>
        <div className="pt-28" />

        <div className="flex-col justify-center items-center space-y-3 relative">
          <div className="w-full h-48 bg-yellow-300 rounded-xl p-4 relative group">
            <div className="text-2xl font-semibold">Nora - BE</div>
            <div className="text-xs font-medium">Norenthindrone - 0.35mg</div>
            <div className="absolute top-40 text-sm ">7h30AM</div>
            <div className="h-48 bg-sky-400 rounded-xl p-4 absolute left-72 top-0 z-10 flex items-center invisible group-hover:visible transition-all">
              <svg
                className="size-6 z-20"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full h-48 bg-green-300 rounded-xl p-4 relative group">
            <div className="text-2xl font-semibold">Feosol</div>
            <div className="text-xs font-medium">Ferrous Sulfate - 600mg</div>
            <div className="absolute top-40 text-sm ">7h30AM</div>
            <div className="h-48 bg-sky-400 rounded-xl p-4 absolute left-72 top-0 z-10 flex items-center invisible group-hover:visible transition-all">
              <svg
                className="size-6 z-20"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
