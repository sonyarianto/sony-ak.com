/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img
        src="https://play.tailwindcss.com/img/beams.jpg"
        alt=""
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white px-6 pb-8 pt-10 shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <img
            src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84MjY0ODJlMzBmMmJmMDAxNTk2ZjZlYjkwODA4MjdjMz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.ANFeUy_WPf1KrjHbaEIXRPdhekzE_PhlNU6j8PTVsuc"
            alt="Sony AK"
            className="block h-[88px] w-[88px] rounded-lg border-[3px] border-solid border-slate-300 object-cover"
          />
          <h1 className="rainbow-based-on-hellonext mt-1 bg-clip-text text-2xl font-extrabold text-gray-800 text-transparent">
            Sony AK
          </h1>
          <p className="text-sm text-gray-600">Member of Technical Staff</p>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <a href="https://github.com/sonyarianto" target="_blank">
                    <img
                      src="/assets/images/github.svg"
                      alt="GitHub"
                      className="h-6 w-6"
                    />
                  </a>
                  <a href="https://github.com/sonyarianto" target="_blank">
                    <p className="ml-4">
                      GitHub,{" "}
                      <span className="text-purple-600">
                        educational materials.
                      </span>
                    </p>
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="https://youtube.com/@sonyarianto" target="_blank">
                    <img
                      src="/assets/images/youtube.svg"
                      alt="YouTube"
                      className="h-6 w-6"
                    />
                  </a>
                  <a href="https://youtube.com/@sonyarianto" target="_blank">
                    <p className="ml-4">
                      personal channel,{" "}
                      <span className="text-orange-600">
                        random things.
                      </span>
                    </p>
                  </a>
                </li>
                {/* <li className="flex items-center">
                  <a href="https://youtube.com/@bljdev" target="_blank">
                    <img
                      src="/assets/images/youtube.svg"
                      alt="YouTube"
                      className="h-6 w-6"
                    />
                  </a>
                  <a href="https://youtube.com/@bljdev" target="_blank">
                    <p className="ml-4">
                      BLJ,{" "}
                      <span className="text-orange-600">
                        educational materials.
                      </span>
                    </p>
                  </a>
                </li>> */}
                {/* <li className="flex items-center">
                  <a href="https://youtube.com/@adayangtanya" target="_blank">
                    <img
                      src="/assets/images/youtube.svg"
                      alt="YouTube"
                      className="h-6 w-6"
                    />
                  </a>
                  <a href="https://youtube.com/@adayangtanya" target="_blank">
                    <p className="ml-4">
                      ada yang tanya,{" "}
                      <span className="text-emerald-600">
                        in Bahasa Indonesia.
                      </span>
                    </p>
                  </a>
                </li> */}
                <li className="flex items-center">
                  <a
                    href="https://www.google.com/search?q=Sony+AK+vs+Sony+corporation"
                    target="_blank"
                  >
                    <img
                      src="/assets/images/justice.svg"
                      alt="Google"
                      className="h-6 w-6"
                    />
                  </a>
                  <a
                    href="https://www.google.com/search?q=Sony+AK+vs+Sony+corporation"
                    target="_blank"
                  >
                    <p className="ml-4">
                      case study,{" "}
                      <span className="text-sky-600">
                        my domain vs Sony Corp.
                      </span>
                    </p>
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="https://buka.sh" target="_blank">
                    <img
                      src="/assets/images/buka.svg"
                      alt="Buka"
                      className="h-6 w-6"
                    />
                  </a>
                  <a href="https://buka.sh" target="_blank">
                    <p className="ml-4">
                      Buka,{" "}
                      <span className="text-emerald-600">
                        something that you open everyday.
                      </span>
                    </p>
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="https://corner.buka.sh" target="_blank">
                    <img
                      src="/assets/images/buka.svg"
                      alt="Buka"
                      className="h-6 w-6"
                    />
                  </a>
                  <a href="https://corner.buka.sh" target="_blank">
                    <p className="ml-4">
                      Buka Corner,{" "}
                      <span className="text-amber-600">
                        guided intelligence knowledge.
                      </span>
                    </p>
                  </a>
                </li>
              </ul>
              <p>
                Keep learning, stay relevant, relevancy increases value.
                Comfortable with being uncomfortable.
              </p>
              <p className="text-sm text-gray-400">
                &copy; 2003 - {new Date().getFullYear()} by Sony Arianto
                Kurniawan - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-3 w-full px-3 text-center text-xs text-gray-400 sm:mx-auto sm:max-w-lg">
        This website is administrated by Sony Arianto Kurniawan and not related
        to Sony Corporation or its affiliate at all.
      </div>
    </div>
  );
}
