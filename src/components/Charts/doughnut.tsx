// /**
//  * Sample for Doughnut chart
//  */
import * as ReactDOM from 'react-dom';
// import * as React from 'react';
// import { EmitType } from '@syncfusion/ej2-base';
// import {
//     AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, IAccLoadedEventArgs,
//     AccumulationDataLabel, Inject, AccumulationTheme, IPointRenderEventArgs
// } from '@syncfusion/ej2-react-charts';
// import { Browser } from '@syncfusion/ej2-base';
// export let pointRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
//     // eslint-disable-next-line no-restricted-globals
//     // let selectedTheme: string = location.hash.split('/')[1];
//     // selectedTheme = selectedTheme ? selectedTheme : 'material';
//     // if (selectedTheme === 'fluent' || selectedTheme === 'bootstrap5') {
//     //     args.fill = seriesColor[args.point.index % 10];
//     // } 
//     // if (selectedTheme.indexOf('dark') > -1) {
//     //     if (selectedTheme.indexOf('material') > -1) {
//     //         args.border.color = '#303030';
//     //     }

//     //     else if (selectedTheme.indexOf('bootstrap5') > -1) {
//     //         args.border.color = '#212529';
//     //     }

//     //     else if (selectedTheme.indexOf('bootstrap') > -1) {
//     //         args.border.color = '#1A1A1A';
//     //     }
//     //     else if (selectedTheme.indexOf('fabric') > -1) {
//     //         args.border.color = '#201f1f';
//     //     }

//     //     else if (selectedTheme.indexOf('fluent') > -1) {
//     //         args.border.color = '#252423';
//     //     }

//     //     else if (selectedTheme.indexOf('bootstrap') > -1) {
//     //         args.border.color = '#1A1A1A';
//     //     }
//     //     else if (selectedTheme.indexOf('tailwind') > -1) {
//     //         args.border.color = '#1F2937';
//     //     }

//     //     else {
//     //         args.border.color = '#222222';
//     //     }

//     // }
//     // else if (selectedTheme.indexOf('highcontrast') > -1) {
//     //     args.border.color = '#000000';
//     // }

//     // else {
//     //     args.border.color = '#FFFFFF';
//     // }
// };
// // let seriesColor = ['#FFE066', "#FAB666", "#F68F6A", "#F3646A", "#CC555A", "#9C4649"];
// export let data1: any[] = 
// [{ x: 'Chrome', y: 61.3, text: 'Chrome: 61.3%' }, 
// { x: 'Safari', y: 24.6, text:  Browser.isDevice ? 'Safari: <br> 24.6%': 'Safari: 24.6%' },
// { x: 'Edge', y: 5.0, text: 'Edge: 5.0%' },
// { x: 'Samsung Internet', y: 2.7, text: Browser.isDevice ? 'Samsung <br> Internet: 2.7%' : 'Samsung Internet: 2.7%' },
// { x: 'Firefox', y: 2.6, text: Browser.isDevice ? 'Firefox: <br> 2.6%' : 'Firefox: 2.6%' },
// { x: 'Others', y: 3.6, text: Browser.isDevice ? 'Others: <br> 3.6%' : 'Others: 3.6%' }
// ]
// function AccumulationDoughnut(this: any) {
//     // let pie: AccumulationChartComponent;
//         return (
//             <div className='control-pane'>
//                 <div className='control-section'>
//                     <AccumulationChartComponent id="pie-chart" 
//                         centerLabel={{
//                             text: 'Mobile<br>Browsers<br>Statistics',
//                             // eslint-disable-next-line no-template-curly-in-string
//                             hoverTextFormat: '${point.x}<br>Browser Share<br>${point.y}%',
//                             textStyle: {
//                                 fontWeight: '600',
//                                 size: Browser.isDevice ? '7px' : '15px'
//                             },
//                         }} enableSmartLabels={true} load={load.bind(this)} loaded={onChartLoad.bind(this)}  pointRender={pointRender} enableBorderOnMouseMove={false} legendSettings={{ visible: false }}>
//                         <Inject services={[PieSeries, AccumulationDataLabel]} />
//                         <AccumulationSeriesCollectionDirective>
//                             <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' innerRadius='65%' border={{width:1}} startAngle= {Browser.isDevice ? 30 : 62 } 
//                             dataLabel={{
//                                 visible: true,
//                                 position: 'Outside', name: 'text',
//                                 font: {
//                                     fontWeight: '600',
//                                 },
//                                 connectorStyle:{length : '20px', type: 'Curve'}
                                
//                             }} radius= {Browser.isDevice ? '40%' : '70%'}>
//                             </AccumulationSeriesDirective>
//                         </AccumulationSeriesCollectionDirective>
//                     </AccumulationChartComponent>
//                 </div>
//             </div>
//         )
//     function onChartLoad(args: IAccLoadedEventArgs): void {
//         document.getElementById('pie-chart').setAttribute('title', '');
//     };
//     function load(args: IAccLoadedEventArgs): void {
//         // eslint-disable-next-line no-restricted-globals
//         let selectedTheme: string = location.hash.split('/')[1];
//         selectedTheme = selectedTheme ? selectedTheme : 'Material';
//         args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").
//             replace(/light/i, "Light").replace(/contrast/i, 'Contrast') as AccumulationTheme;
//     };
// }
// export default AccumulationDoughnut;