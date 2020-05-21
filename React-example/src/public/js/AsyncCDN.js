const mapPath = document.body.getAttribute('mapPath');
const pictureType = document.body.getAttribute('pictureType');

export const EmEditAsync=()=>loadScript('http://49.234.191.45:7001/3m/edit?v=1.0.1&key=onhzbc00sfot4oek','EmEdit');

//高德api
export const AMapAsync=(optins={})=>{

    let {plugin}=optins;

    plugin = plugin && plugin instanceof Array ? `&plugin=${plugin.join(',')}`:'';

    return setCallBackLoadScript(`https://webapi.amap.com/maps?v=1.4.8&key=99d77e072f09ea55969ce6b5f1593609${plugin}`, 'AMap', optins);

};
//高德可视化api
export const LocaAsync=()=>loadScript('https://webapi.amap.com/loca?v=1.2.0&key=99d77e072f09ea55969ce6b5f1593609', 'Loca');

//百度地图下载脚本
export const BMapAsync = async ()=>{
   
    if (process.env.NODE_ENV==='production'){ 
        window.__BAIDU__API__CONFIG__={
            scriptPath:`${process.env.PUBLIC_URL}/baiduApi/`, //脚本目录地址
            imagePath:`${process.env.PUBLIC_URL}/baiduApi/images/`, //百度小图标目录地址
            maptilePath:mapPath, //瓦片图目录
            maptileFormate:pictureType//瓦片图格式
        };
        return await loadScript(`${process.env.PUBLIC_URL}/baiduApi/apiv2.0_street.js`, 'BMap');
     
    }else{
        return setCallBackLoadScript('https://api.map.baidu.com/api?v=2.0&ak=19d4aa4182c4809347bbf96f0820dc69&s=1', 'BMap');
    }
};
export const BDrawAsync=()=>{
    if (process.env.NODE_ENV==='production'){
        return loadScript(`${process.env.PUBLIC_URL}/baiduApi/DrawingManager_1.4.js`, 'BMapLib');
    }else{
        return loadScript('https://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js', 'BMapLib');
    }
};
export const HeatAsync=()=>loadScript('https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js');

//按官方异步加载需要回调参数的脚本下载函数
let setCallBackLoadScript = (function(){

    //对应某脚本当前配置所加载的资源记录。如果某脚本要加载的资源为当前加载的资源，则不需要重新加载。反之重新加载
    let cacheLibForScriptOptions = {};

    return function(
        //请求脚本url地址
        url,
        //脚本加载后的全局变量名
        className,
        //入参配置
        optins={}
    ){

        let optinsValue = JSON.stringify(optins);

        return new Promise(function(resolve, reject){

            let loadCallBackName = `${className}OnLoad`;

            //如果某脚本要加载的资源为当前加载的资源
            if(cacheLibForScriptOptions[className]===optinsValue){
                return resolve(window[className]);
            }

            url+=`&callback=${loadCallBackName}`;

            window[loadCallBackName] = function(){

                //记录某脚本要加载的资源配置
                cacheLibForScriptOptions[className]=optinsValue;
                resolve(window[className]);

            };

            createScript(url);

        });
    };

})();


//加载一般脚本
function loadScript(
    //请求脚本url地址
    url,
    //脚本加载后的全局变量名
    className
){

    return new Promise(function(resolve, reject){

        //如果已加载过该jsdk
        // if(className&&window[className]){
        //     return resolve(window[className])
        // }

        let script = createScript(url);

        script.onload = function(){
            resolve(className&&window[className]);
        };
        script.onerror = function(e){
            reject(e);
        };

    });

}

//创建script标签
function createScript(url){

    let script = document.createElement('script');

    script.charset = 'utf-8';
    script.src = url;
    document.head.appendChild(script);

    return script;

}






