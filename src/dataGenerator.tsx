type Point =[number,number]
type Data = {
    name?:string,
    type?:string,
    data:Point[]
}
type DataSet= {data:Data[],xmin?:number,xmax?:number,ymin?:number,ymax?:number}

const seriesNum:number=10;
const dataNum:number=180;
let dataSet:DataSet={data:[]};

export const data_x_min:number = 0;
export const data_x_max:number = 0;
export const data_y_min:number = 0;
export const data_y_max:number = 0;

for (let i = 0; i < seriesNum; i++) {
    let arr:Point[]=[]
    for (let j = 0; j < dataNum; j++) {
        arr.push([j,Math.random()*10]);
    }
    dataSet.data.push({
        name:'demo',
        type:'scatter',
        data:arr,

    });
}
dataSet={
    ...dataSet,
    xmin:data_x_min,
    xmax:data_x_max,
    ymin:data_y_min,
    ymax:data_y_max
}
        

export default dataSet;