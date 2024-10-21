import React, { useState } from 'react';
import { FiltersContainer, FilterSection, FilterTitle, FilterContent, PriceSlider, ColorOptions, ColorCircle, Checkbox } from './filterStyle';

const Filters = () => {
    const [showPrice, setShowPrice] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [showSize, setShowSize] = useState(false);
    const [priceRange, setPriceRange] = useState([96, 220]); // Rango de precio de ejemplo
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const togglePrice = () => setShowPrice(!showPrice);
    const toggleColor = () => setShowColor(!showColor);
    const toggleSize = () => setShowSize(!showSize);

    const handleSizeChange = (size: string) => {
        setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
    };

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMinPrice = Math.min(+e.target.value, priceRange[1]);
        setPriceRange([newMinPrice, priceRange[1]]);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMaxPrice = Math.max(+e.target.value, priceRange[0]);
        setPriceRange([priceRange[0], newMaxPrice]);
    };

    return (
        <FiltersContainer>
            <FilterSection>
                <FilterTitle onClick={togglePrice}>Precio +</FilterTitle>
                <FilterContent style={{ height: showPrice ? 'auto' : '0', visibility: showPrice ? 'visible' : 'hidden', overflow: 'hidden' }}>
                    <PriceSlider
                        type="range"
                        min="96"
                        max="220"
                        value={priceRange[0]}
                        onChange={handleMinPriceChange}
                    />
                    <PriceSlider
                        type="range"
                        min="96"
                        max="220"
                        value={priceRange[1]}
                        onChange={handleMaxPriceChange}
                    />
                    <p>{`€${priceRange[0]},00 - €${priceRange[1]},00`}</p>
                </FilterContent>
            </FilterSection>

            <FilterSection>
                <FilterTitle onClick={toggleColor}>Color +</FilterTitle>
                <FilterContent style={{ height: showColor ? 'auto' : '0', visibility: showColor ? 'visible' : 'hidden', overflow: 'hidden' }}>
                    <ColorOptions>
                        <ColorCircle color="yellow" />
                        <ColorCircle color="blue" />
                        <ColorCircle color="white" />
                        <ColorCircle color="black" />
                    </ColorOptions>
                </FilterContent>
            </FilterSection>

            <FilterSection>
                <FilterTitle onClick={toggleSize}>Talla +</FilterTitle>
                <FilterContent style={{ height: showSize ? 'auto' : '0', visibility: showSize ? 'visible' : 'hidden', overflow: 'hidden' }}>
                    {['37', '38', '39', '40', '41'].map(size => (
                        <Checkbox key={size}>
                            <input
                                type="checkbox"
                                checked={selectedSizes.includes(size)}
                                onChange={() => handleSizeChange(size)}
                            />
                            {size}
                        </Checkbox>
                    ))}
                </FilterContent>
            </FilterSection>
        </FiltersContainer>
    );
};

export default Filters;
