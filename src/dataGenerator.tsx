type Point =[Number,Number]
type Data = {
    data:Point[]
}
type DataSet= Data[]

const seriesNum:Number=2;
const dataNum:Number=50000;
let dataSet:DataSet=[];

for (let i = 0; i < seriesNum; i++) {
    let arr:Point[]=[]
    for (let j = 0; j < dataNum; j++) {
        arr.push([j,Math.random()]);
    }
    dataSet.push({
        data:arr
    });
}



export default dataSet;