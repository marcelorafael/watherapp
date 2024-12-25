import axios from "axios";

async function handleGetImageSVG(conditionImg: string) {
    const data = await axios.get(`https://assets.hgbrasil.com/weather/icons/conditions/${!!conditionImg ? conditionImg : 'cloud'}.svg`);
    let resultImageSVG = null;

    if (!data.data.includes('viewBox')) {
        resultImageSVG = data.data.replace('<svg', '<svg viewBox="-30 -40 160 160"'); // Ajuste o valor do viewBox conforme necessário
    }

    return resultImageSVG
}
export default handleGetImageSVG