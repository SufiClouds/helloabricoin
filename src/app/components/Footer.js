import React from "react";

export const Footer = () => {
  return (
    <footer class="bg-[#0b1d33] text-white py-10">
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-12">
        <div>
          <div class="flex items-center mb-4">
            <img
              src="/assets/logo.png"
              alt="Abricoin Logo"
              class="w-12 h-12 mr-2"
            />
            <h2 class="text-3xl font-bold">Abricoin</h2>
          </div>
          <p class="text-sm">
            A new way to make the payments easy, reliable, and 100% secure.
            Claritatem itamconse quat. Exerci tationulla.
          </p>
          <div class="flex space-x-4 mt-4">
            <a href="#">
              <i class="fab fa-twitter text-lg"></i>a
            </a>
            <a href="#">
              <i class="fab fa-facebook text-lg"></i>b
            </a>
            <a href="#">
              <i class="fab fa-youtube text-lg"></i>c
            </a>
            <a href="#">
              <i class="fab fa-skype text-lg"></i>d
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">USEFUL LINKS</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">COMMUNITY</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Suggestions</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletters</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">SUBSCRIBE NEWSLETTER</h4>
          <p class="text-sm mb-4">
            Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
            commodo.
          </p>
          <div class="relative">
            <input
              type="email"
              class="w-full p-3 rounded-md bg-[#13233a] text-white placeholder-gray-400"
              placeholder="Info@gmail.com"
            />
            <button class="absolute right-0 top-0 h-full bg-[#1da1f2] p-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h14M3 14h14m-7-7v14"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-6 text-sm px-4 lg:px-12">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p>&copy; 2023 Abricoin All Rights Reserved.</p>
          <div class="flex space-x-4">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
