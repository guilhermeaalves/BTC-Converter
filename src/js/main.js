function criaLayout() {

    const header = document.createElement('header');
    header.classList.add('bg-white');
    
    const nav = document.createElement('nav');
    nav.classList.add('mx-auto', 'flex', 'max-w-7xl', 'items-center', 'justify-between', 'p-6', 'lg:px-8');
    nav.setAttribute('aria-label', 'Global');
    
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('flex', 'lg:flex-1');
    
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    logoLink.classList.add('-m-1.5', 'p-1.5');
    const logoImg = document.createElement('img');
    logoImg.classList.add('h-8', 'w-auto');
    logoImg.src = 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040';
    logoLink.appendChild(logoImg);
    logoDiv.appendChild(logoLink);
    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('hidden', 'lg:flex', 'lg:gap-x-12');
    const menuItems = ['Features', 'Marketplace', 'Company'];
    menuItems.forEach(item => {
        const a = document.createElement('a');
        a.href = '#';
        a.classList.add('text-sm/6', 'font-semibold', 'text-gray-900');
        a.textContent = item;
        menuDiv.appendChild(a);
    });
    
    const loginDiv = document.createElement('div');
    loginDiv.classList.add('hidden', 'lg:flex', 'lg:flex-1', 'lg:justify-end');
    const loginLink = document.createElement('a');
    loginLink.href = '#';
    loginLink.classList.add('text-sm/6', 'font-semibold', 'text-gray-900');
    loginLink.innerHTML = 'Log in <span aria-hidden="true">&rarr;</span>';
    loginDiv.appendChild(loginLink);
    
    nav.appendChild(logoDiv);
    nav.appendChild(menuDiv);
    nav.appendChild(loginDiv);
    header.appendChild(nav);
    
    document.body.appendChild(header);

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('flex-col');
    
    const label = document.createElement('label');
    label.setAttribute('for', 'price');
    label.classList.add('flex', 'justify-evenly', 'text-sm/6', 'font-medium', 'text-gray-900');
    label.textContent = 'Price';
    
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('flex', 'justify-center', 'mt-2');
    
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('flex', 'items-center', 'rounded-md', 'bg-white', 'pl-3', 'w-60', 'outline-1', '-outline-offset-1', 'outline-gray-300');
    
    const inputPriceDiv = document.createElement('div');
    inputPriceDiv.id = 'inputPrice';
    inputPriceDiv.classList.add('shrink-0', 'text-base', 'text-gray-500', 'select-none', 'sm:text-sm/6');
    inputPriceDiv.textContent = '$';
    
    const input = document.createElement('div');
    input.id = 'price';
    input.classList.add('block', 'min-w-0', 'grow', 'py-1.5', 'pr-3', 'pl-1', 'text-base', 'text-gray-900', 'placeholder:text-gray-400', 'focus:outline-none', 'sm:text-sm/6');
    input.setAttribute('placeholder', '0.00');
    
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid', 'w-20', 'shrink-0', 'grid-cols-1', 'items-right', 'justify-self-end', 'focus-within:relative');
    
    const select = document.createElement('select');
    select.id = 'currency';
    select.name = 'currency';
    select.setAttribute('aria-label', 'Currency');
    select.classList.add('col-start-1', 'row-start-1', 'w-full', 'appearance-none', 'rounded-md', 'py-1.5', 'pr-7', 'pl-3', 'text-base', 'text-gray-500', 'placeholder:text-gray-400', 'focus:outline-2', 'focus:-outline-offset-2', 'focus:outline-indigo-600', 'sm:text-sm/6');
    
    const options = [
        { value: '1', label: 'USD' },
        { value: '2', label: 'BRL' },
        { value: '3', label: 'EUR' },
        { value: '4', label: 'CAD' }
    ];
    
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        select.appendChild(option);
    });

    const svg = document.createElement('svg');
    svg.classList.add('pointer-events-none', 'col-start-1', 'row-start-1', 'mr-2', 'size-5', 'self-center', 'justify-self-end', 'text-gray-500', 'sm:size-4');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('aria-hidden', 'true');
    
    const path = document.createElement('path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z');
    path.setAttribute('clip-rule', 'evenodd');
    svg.appendChild(path);
    
    gridDiv.appendChild(select);
    gridDiv.appendChild(svg);
    
    innerDiv.appendChild(inputPriceDiv);
    innerDiv.appendChild(input);
    innerDiv.appendChild(gridDiv);
    inputDiv.appendChild(innerDiv);
    
    mainDiv.appendChild(label);
    mainDiv.appendChild(inputDiv);
    
    document.body.appendChild(mainDiv);
}

criaLayout();
