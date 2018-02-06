import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Http, Response } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-ychart',
  templateUrl: 'ychart.html',
})
export class YchartPage {

 
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('radarCanvas') radarCanvas;
  @ViewChild('polarCanvas') polarCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  radarChart: any;
  polarChart: any;
  csvContent: string;
  rowsdata :any;
  dataCSV: any;



  constructor(public navCtrl: NavController) {

      this.rowsdata = [1,2,3,4,3,2,3,4,1,2,3,8];
      this.rowsdata.length=12;

  }

  

  ngOnInit() {

      
      var rows;
      var self = this;
      var input = (<HTMLInputElement>document.getElementById("file"));
      input.addEventListener("change", function(event) {
      var files = input.files;
      var len = files.length;
      var text;
  
          if (len) {

          console.log("Filename: " + files[0].name);
          console.log("Type: " + files[0].type);
          console.log("Size: " + files[0].size + " bytes");

          var fr = new FileReader();
          
          fr.onload = function(e) {


              let test = "123 ; 456";
              let ResultatTest = test.split(";");
              console.log("TOMAS");
              console.log(ResultatTest);
              console.log("on est dans function");
              text = fr.result;
              console.log("voici text");
              console.log(text);
              console.log("voici toArrayWithBack");
              let toArrayWithBack =  text.split("\n");
              console.log(toArrayWithBack);
              console.log(toArrayWithBack[1]);
              let toArray:Array<any> = new Array(toArrayWithBack.length);
              
              for ( let i = 0 ; i < toArrayWithBack.length ; i++)
              {
                  toArray[i] =  toArrayWithBack[i].split(";");
              }

               console.log("on split pas nouuuus ?");
               console.log(toArray);
              
               self.dataCSV = toArray;
              
              console.log(text);

              rows = text.split("\n");
              self.rowsdata = rows;
              console.log("Row 0 " + rows[0]);
              console.log("Row 1 " + rows[1]);
              console.log("Row 2 " + rows[2]);

              console.log(rows.length);

          };
          
          
          fr.readAsText(files[0]);

          }

          
  
      }, false);

  }



  public updateDataFromCSV():void {

              let _lineChartData:Array<any> = new Array(this.lineChartData.length);

              _lineChartData = [1,2,3,4,5,6,7];

              for (let i = 0; i < this.lineChartData.length; i++) {
                  _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
                  for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                    _lineChartData[i].data[j] = this.dataCSV[i][j];
                  }
                }



           this.lineChartData = _lineChartData;

  }






  ionViewDidLoad() {

     
             this.barChart = new Chart(this.barCanvas.nativeElement, {
      
                 type: 'bar',
                 data: {
                     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                     datasets: [{
                         label: '# of Votes',
                         data: [12, 19, 3, 5, 2, 3],
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(75, 192, 192, 0.2)',
                             'rgba(153, 102, 255, 0.2)',
                             'rgba(255, 159, 64, 0.2)'
                         ],
                         borderColor: [
                             'rgba(255,99,132,1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(255, 206, 86, 1)',
                             'rgba(75, 192, 192, 1)',
                             'rgba(153, 102, 255, 1)',
                             'rgba(255, 159, 64, 1)'
                         ],
                         borderWidth: 1
                     }]
                 },
                 options: {
                     scales: {
                         yAxes: [{
                             ticks: {
                                 beginAtZero:true
                             }
                         }]
                     }
                 }
      
             });
      
             this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      
                 type: 'doughnut',
                 data: {
                     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                     datasets: [{
                         label: '# of Votes',
                         data: [12, 19, 3, 5, 2, 3],
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(75, 192, 192, 0.2)',
                             'rgba(153, 102, 255, 0.2)',
                             'rgba(255, 159, 64, 0.2)'
                         ],
                         hoverBackgroundColor: [
                             "#FF6384",
                             "#36A2EB",
                             "#FFCE56",
                             "#FF6384",
                             "#36A2EB",
                             "#FFCE56"
                         ]
                     }]
                 }
      
             });
      
             this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      
                 type: 'line',
                 data: {
                     labels: ["January", "February", "March", "April", "May", "June", "July"],
                     datasets: [
                         {
                             label: "My First dataset",
                             fill: false,
                             lineTension: 0.1,
                             backgroundColor: "rgba(75,192,192,0.4)",
                             borderColor: "rgba(75,192,192,1)",
                             borderCapStyle: 'butt',
                             borderDash: [],
                             borderDashOffset: 0.0,
                             borderJoinStyle: 'miter',
                             pointBorderColor: "rgba(75,192,192,1)",
                             pointBackgroundColor: "#fff",
                             pointBorderWidth: 1,
                             pointHoverRadius: 5,
                             pointHoverBackgroundColor: "rgba(75,192,192,1)",
                             pointHoverBorderColor: "rgba(220,220,220,1)",
                             pointHoverBorderWidth: 2,
                             pointRadius: 1,
                             pointHitRadius: 10,
                             data: [65, 59, 80, 81, 56, 55, 40],
                             spanGaps: false,
                         }
                     ]
                 }
      
             });
     
             this.radarChart = new Chart(this.radarCanvas.nativeElement, {
                 type: 'radar',
                 data: {
                     labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
                     datasets: [{
                       label: "Student A",
                       backgroundColor: "rgba(200,0,0,0.2)",
                       data: [65, 75, 70, 80, 60, 80]
                     }, {
                       label: "Student B",
                       backgroundColor: "rgba(0,0,200,0.2)",
                       data: [54, 65, 60, 70, 70, 75]
                     }]
                 }
             });
     
             this.polarChart = new Chart(this.polarCanvas.nativeElement, {
                 type: 'polarArea',
                 data: {
                     labels: ["Spring","Summer","Fall","Winter"],
                     datasets: [{
                       data: [1200, 1700, 800, 200],
                       backgroundColor: [
                         "rgba(255, 0, 0, 0.5)",
                         "rgba(100, 255, 0, 0.5)",
                         "rgba(200, 50, 255, 0.5)",
                         "rgba(0, 100, 255, 0.5)"
                       ]
                     }]
                 }
             });
      
  }






// lineChart
public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
];
public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public lineChartOptions:any = {
  responsive: true
};
public lineChartColors:Array<any> = [
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
public lineChartLegend:boolean = true;
public lineChartType:string = 'line';

public randomize():void {
  let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  for (let i = 0; i < this.lineChartData.length; i++) {
    _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    for (let j = 0; j < this.lineChartData[i].data.length; j++) {
      _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    }
  }
  this.lineChartData = _lineChartData;
}

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

}
