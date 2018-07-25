export default {
  formateDate(time) {
    if(!time) return;
    const myDate = new Date(time);
    return `${myDate.getFullYear()}-${myDate.getMonth()}-${myDate.getDay()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
  }
}