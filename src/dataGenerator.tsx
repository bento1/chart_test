type Point =[number,number]
type Data = {
    data:Point[]
}
type DataSet= Data[]

const seriesNum:number=10;
const dataNum:number=180;
let dataSet:DataSet=[];

for (let i = 0; i < seriesNum; i++) {
    let arr:Point[]=[]
    for (let j = 0; j < dataNum; j++) {
        arr.push([j,Math.random()*10]);
    }
    dataSet.push({
        data:arr
    });
}



export default dataSet;