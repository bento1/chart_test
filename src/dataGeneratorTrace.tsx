type Point =[number,number]
type Data = {
    name?:string,
    type?:string,
    data:Point[]
}
type DataSet= {data:Data[],xmin?:number,xmax?:number,ymin?:number,ymax?:number,xcenter?:number,ycenter?:number}

const seriesNum:number=10;
const dataNum:number=180;
let dataSet:DataSet={data:[]};

export let data_x_min:number = 0;
export let data_x_max:number = 0;
export let data_y_min:number = 0;
export let data_y_max:number = 0;
export let data_x_center:number = 0;
export let data_y_center:number = 0;

let x_list=[];
let y_list=[]
let x_sum = 0;
let y_sum = 0;
for (let i = 0; i < seriesNum; i++) {
    let arr:Point[]=[]
    for (let j = 0; j < dataNum; j++) {
        let x=j;
        let y=Math.random()*10;
        arr.push([x,y]);
        x_list.push(x);
        y_list.push(y);
        x_sum=x_sum+x;
        y_sum=y_sum+y;
    }
    dataSet.data.push({
        name:'demo',
        type:'line',
        data:arr,

    });

}
data_x_min =Math.min(...x_list);
data_x_max =Math.max(...x_list);
data_x_center =x_sum/x_list.length;
data_y_min =Math.min(...y_list);
data_y_max =Math.max(...y_list);
data_y_center =y_sum/y_list.length;




dataSet={
    ...dataSet,
    xmin:data_x_min,
    xmax:data_x_max,
    ymin:data_y_min,
    ymax:data_y_max,
    xcenter:data_x_center,
    ycenter:data_y_center
}
        

export default dataSet;