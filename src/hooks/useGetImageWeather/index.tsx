import { useState, useEffect } from 'react';

type UseFetchSvgResult = {
    svgData: string | null;
    isLoading: boolean;
    error: string | null;
};

// export const useFetchSvg = (inputCodeImage?: string): UseFetchSvgResult => {
//     const [svgData, setSvgData] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSvg = async () => {
//       try {
//         setIsLoading(true);

//         const response = await fetch(
//           `https://assets.hgbrasil.com/weather/icons/conditions/${inputCodeImage ? inputCodeImage : 'cloud'}.svg`
//         );

//         const data = await response.text();

//         // Adiciona o `viewBox` se não existir
//         const updatedData = data.includes('viewBox')
//           ? data
//           : data.replace('<svg', '<svg viewBox="-30 -40 160 160"'); // Ajuste conforme necessário

//         setSvgData(updatedData);
//         setError(null); // Limpa qualquer erro anterior
//       } catch (err) {
//         console.error('Erro ao carregar SVG:', err);
//         setError('Erro ao carregar a imagem SVG.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSvg();
//   }, [inputCodeImage]);

//   return { svgData, isLoading, error };
// };

export const useFetchSvg = () => {
    const [svgData, setSvgData] = useState<string | null>(null);

    const fetchSvg = async (inputCodeImage: string) => {
        try {
            // setIsLoading(true);

            const response = await fetch(
                `https://assets.hgbrasil.com/weather/icons/conditions/${inputCodeImage ? inputCodeImage : 'cloud'}.svg`
            );

            const data = await response.text();

            // Adiciona o `viewBox` se não existir
            const updatedData = data.includes('viewBox')
                ? data
                : data.replace('<svg', '<svg viewBox="-30 -40 160 160"'); // Ajuste conforme necessário

            setSvgData(updatedData);
            // setError(null); // Limpa qualquer erro anterior
        } catch (err) {
            console.error('Erro ao carregar SVG:', err);
            // setError('Erro ao carregar a imagem SVG.');
        }
    };

    return { fetchSvg, svgData }
}