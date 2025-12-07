import { BookMarked, DoorOpen, Scale } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img
        src="https://play.tailwindcss.com/img/beams.jpg"
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <img
            src="https://gravatar.com/userimage/12053163/b014669557f8cfbdbb0bd2ac084db1af.jpeg?size=256"
            alt="Sony AK"
            className="block h-[88px] w-[88px] rounded-lg border-[3px] border-solid border-slate-300 object-cover"
          />
          <h1 className="rainbow-based-on-hellonext mt-1 bg-clip-text text-2xl font-extrabold text-transparent">
            Sony AK
          </h1>
          <p className="text-sm text-gray-600">Member of Technical Staff</p>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <a href="https://github.com/sonyarianto" target="_blank">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
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
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                    >
                      <title>YouTube</title>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@sonyarianto?sub_confirmation=1"
                    target="_blank"
                  >
                    <p className="ml-4">
                      YouTube channel,{" "}
                      <span className="text-orange-600">random things.</span>
                    </p>
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="https://www.google.com/search?q=Sony+AK+vs+Sony+corporation"
                    target="_blank"
                  >
                    <Scale className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.google.com/search?q=Sony+AK+vs+Sony+corporation"
                    target="_blank"
                  >
                    <p className="ml-4">
                      Case study,{" "}
                      <span className="text-sky-600">
                        my domain vs Sony Corp.
                      </span>
                    </p>
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="https://corner.buka.sh" target="_blank">
                    <BookMarked className="h-6 w-6" />
                  </a>
                  <a href="https://corner.buka.sh" target="_blank">
                    <p className="ml-4">
                      Buka Corner,{" "}
                      <span className="text-amber-600">
                        augmented knowledge.
                      </span>
                    </p>
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="https://corner.buka.sh" target="_blank">
                    <DoorOpen className="h-6 w-6" />
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
