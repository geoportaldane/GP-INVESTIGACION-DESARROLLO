export function getCurrentDate(separator = ' de ') {

    const nameD = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const nameM = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    let newDate = new Date()
    let day = nameD[newDate.getDay()];
    let date = newDate.getDate();
    let month = nameM[newDate.getMonth()];
    let year = newDate.getFullYear();

    return `${day}, ${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
}