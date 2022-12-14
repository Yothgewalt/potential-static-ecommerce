import { setProductState } from '../../contexts/global';
import splitClassNames from '../../helper/splitClassNames';

export default function ProductCardTemplate(
    imageUrl, alternative, brand, carName, driveTrain,
    engineType, fuelSystem, maximumHorsePower, maximumTorque,
    transmissionSpeeds, description, priceCar, carAvailable,
    fromPage,
) {
    const buttonElement = document.createElement('button');
    const classNames = splitClassNames(
        'w-full h-[640px] p-3 relative flex flex-col space-y-4 rounded-xl justify-start items-start',
        'transition ease-in-out overflow-hidden hover:bg-neutral-200'
    );
    classNames.map((className) => {
        buttonElement.classList.add(className);
    });
    buttonElement.innerHTML = `
    <div class="w-full h-[550px] relative flex">
        <img src="${imageUrl}" alt="${alternative}" class="w-full h-full rounded-xl select-none object-cover z-10" loading="lazy" />
    </div>
    <div class="w-full flex flex-row justify-between items-start">
        <span class="flex flex-col justify-start items-start">
            <h1 class="w-[16rem] truncate font-inter font-semibold text-start">
                ${carName}
            </h1>
            <p class="font-inter font-light text-gray-600">
                พร้อมให้บริการ ${carAvailable} คัน
            </p>
        </span>
        <span class="font-seeds font-semibold">
            ${priceCar.toLocaleString()} บาท
        </span>
    </div>
    `;

    const priceToLocaleString = priceCar.toLocaleString();

    buttonElement.addEventListener("click", () => setProductState(
        imageUrl, alternative, brand, carName, driveTrain,
        engineType, fuelSystem, maximumHorsePower, maximumTorque,
        transmissionSpeeds, description, priceToLocaleString, carAvailable,
        priceCar, fromPage,
    ));

    return buttonElement;
}
