//格式化html里的代码换行成渲染时的换行和空格
export function formatTextCodeToview(string){

    string = string.replace(/[\n\r]/g, '<br/>');

    let reduxSpaceLength = string.match(/^\s*/)[0].length;
    let reduxSpaceReg = new RegExp(`(^\\s{${reduxSpaceLength}})|(\\<br\\/\\>\\s{${reduxSpaceLength}})`, 'g');

    string.replace(reduxSpaceReg, '');

    return string.replace(/\s/g, '&nbsp;');

}

//获取自动前缀
export function getAutoPathPrefix(){

    if (process.env.NODE_ENV==='production') return document.body.getAttribute('prefix');
    else return process.env.FETCH_PREFIX;

}

//根据当年月份返回月末的年月日
// @parmas [YM:require] {string} defualt:null 如2019-04
// #return [YMD] {string} //返回月末的年月日 如2019-04-30
export function monthLastDate(YM){
    let d = new Date(...YM.split('-'), 0).getDate();
    d=toDoubleTime(d);
    return `${YM}-${d}`;
}

//根据当年周数返回月末的年月日
// @parmas [YM:require] {string} defualt:null 如2019-13周
// #return [YMD] {string} //返回月末的年月日 如2019-03-31
export function dayLastDate(YD){
    const oneDayToStamp=24*60*60*1000;
    let [year, week]=YD.split('-');
    week = week.replace(/\D/g, '');
    let deviation = new Date(new Date(year).getTime()-oneDayToStamp).getDay();
    let stamp = new Date(year+'', 0, 0).getTime()+week*7*oneDayToStamp-deviation*oneDayToStamp;
    let time = new Date(stamp);
    let y = toDoubleTime(time.getFullYear());
    let m = toDoubleTime(time.getMonth() + 1);
    let d = toDoubleTime(time.getDate());
    return `${y}-${m}-${d}`;
}

//时间格式化，返回2位以上的数
export function toDoubleTime(num){
    return String(num).length>1?num:`0${num}`;
}

export function debounce(fn, wait) {    
    let timeout = null;    
    return function() {        
        if(timeout !== null)   clearTimeout(timeout);        
        timeout = setTimeout(() =>{
            fn.apply(this, arguments)
        }, wait);    
    }
}

export function format2Thousands (num) {  
    let reg=/\d{1,3}(?=(\d{3})+$)/g;   
    return (num + '').replace(reg, '$&,');  
}