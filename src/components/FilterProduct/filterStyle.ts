import styled from 'styled-components';

export const FiltersContainer = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const FilterSection = styled.div`
    margin-bottom: 20px;
`;

export const FilterTitle = styled.h3`
    cursor: pointer;
    margin: 0;
    padding: 10px;
    background-color: #f0f0f0; // Light background for title
`;

export const FilterContent = styled.div`
    padding: 10px;
    border: 1px solid #ddd;
    border-top: none; // No top border
`;

export const PriceSlider = styled.input`
    width: 100%;
`;

export const ColorOptions = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const ColorCircle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin-right: 10px;
    cursor: pointer;
    border: 2px solid #ccc; /* Borde gris */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Sombra opcional para darle más profundidad */
`;


export const Checkbox = styled.label`
    display: block;
    margin: 5px 0;
    cursor: pointer;

    input {
        margin-right: 5px;
    }
`;
