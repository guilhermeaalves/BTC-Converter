document.addEventListener("DOMContentLoaded", function () {

    const header = document.createElement("header");
    header.className = "bg-white";
    header.innerHTML = `
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040" alt="">
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Open main menu</span>
                    <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">

                <a href="#" class="text-sm/6 font-semibold text-gray-900">Features</a>
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Marketplace</a>
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Company</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span
                        aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
    `;
    document.body.appendChild(header);
    

    const container = document.createElement("div");
    container.className = "flex justify-center mt-2 gap-x-50";
    container.innerHTML = `
        <div class="mt-2">
                    <div
                        class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">

                        <div class="shrink-0 text-base text-gray-500 select-none sm:text-xl/6">$</div>

                        <input type="number" name="price" id="inputBtcPrice"
                            class="block min-w-0 grow py-3 pr-25 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-xl/10"
                            value="0">
                        <div class="grid shrink-0 grid-cols-1 pr-3 focus-within:relative">

                            <select id="currency" name="currency" aria-label="Currency"
                                class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6">
                                <option>BTC</option>
                                <option>ETH</option>
                            </select>

                            <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd"
                                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                    clip-rule="evenodd" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-2">
                <div
                    class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">

                    <div class="shrink-0 text-base text-gray-500 select-none sm:text-xl/6">$</div>

                    <input type="number" name="price" id="outputPrice"
                        class="block min-w-0 grow py-3 pr-25 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-xl/10"
                        value="0">
                    <div class="grid shrink-0 grid-cols-1 pr-3 focus-within:relative">

                        <select id="outputCurrency" name="outputCurrency" aria-label="Currency"
                            class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6">
                            <option>USD</option>
                            <option>BRL</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>

                        <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd" />
                        </svg>

                    </div>
                </div>
            </div>
    `;
    document.body.appendChild(container);
});
