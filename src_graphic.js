

let moomba = [];
var chart;

function processFiles(files) {
    var file = files[0];
    var reader = new FileReader();

    

    reader.onload = function (e) {
        var output = document.getElementById("fileOutput");   
        // output.textContent = e.target.result;
        let poop = e.target.result;
        let oppa = poop.split('@');
        //output.textContent = oppa[0];


        let q1 = [];
        let pom = [];

        for(let i = 0; i < oppa.length; i += 1) {
            q1 = oppa[i].split('|');
            pom.push(q1);
        }


        let q2 = 0;
        let q3 = 0;
        let pom2 = [];
        let quick = [];

        moomba = quick;

        for(let i = 0; i < pom.length; i += 1) {
            let q2 = pom[i][1];
            let q3 = pom[i][3];

            let pom2 = []; 
            pom2.push(q2, q3);

            moomba.push(pom2);   
        }


        // output.textContent = quick; // отображение надписи на экране



        var dataSet = anychart.data.set(moomba);


        var firstSeriesData = dataSet.mapAs({x: 0, value: 1});



        const fileUploader = document.getElementById('fileInput');

        fileUploader.addEventListener('change', (event) => {
            const files = event.target.files;
            console.log('files', files);
        });

        




              //  chart.yScale().ticks().interval(10);
      //  chart.xScale().ticks().interval(5);

        //chart.title("Временной график температуры");
/*
        chart.container("container");
        chart.draw();
        */
 
        chart = anychart.line();
        chart.line(firstSeriesData);
        chart.yScale(anychart.scales.linear());
        chart.yAxis().staggerMode(true);
        chart.yAxis().staggerMaxLines(20);
        chart.xAxis().title("Время");
        chart.yAxis().title("Температура");
        chart.container("container_2");
        chart.draw();
        chart.xScroller(true);
        chart.yScroller(true);




        

    };

    reader.readAsText(file);  

};















let toomba = [];

function processFiles_2(files) {
    var file = files[0];
    var reader = new FileReader();

    

    reader.onload = function (e) {
        var output = document.getElementById("fileOutput");   
        // output.textContent = e.target.result;
        let poop = e.target.result;
        let oppa = poop.split('@');
        //output.textContent = oppa[0];


        let q1 = [];
        let pom = [];

        for(let i = 0; i < oppa.length; i += 1) {
            q1 = oppa[i].split('|');
            pom.push(q1);
        }


        let q2 = 0;
        let q3 = 0;
        let pom2 = [];
        let quick = [];

        toomba = quick;

        for(let i = 0; i < pom.length; i += 1) {
            let q2 = pom[i][1];
            let q3 = pom[i][3];

            let pom2 = []; 
            pom2.push(q2, q3);

            toomba.push(pom2);   
        }


        // output.textContent = quick; // отображение надписи на экране



        var dataSet = anychart.data.set(toomba);


        var firstSeriesData = dataSet.mapAs({x: 0, value: 1});



        const fileUploader = document.getElementById('fileInput');

        fileUploader.addEventListener('change', (event) => {
            const files = event.target.files;
            console.log('files', files);
        });

        








        const chart_2 = anychart.column();
       
        chart_2.column(firstSeriesData).stroke("15 red");

        //chart_2.column(firstSeriesData).stroke("5 red");

        chart_2.yScale(anychart.scales.linear());
        
        chart_2.yAxis().staggerMode(true);
        chart_2.yAxis().staggerMaxLines(20);
        chart_2.xAxis().title("Время");
        chart_2.yAxis().title("Температура");
        chart_2.container("container_3");

        
    
        
        chart_2.draw();
        chart_2.xScroller(true);
        chart_2.yScroller(true);
        
        
        

    };

    reader.readAsText(file);  

};














let qoomba = [];

function processFiles_3(files) {
    var file = files[0];
    var reader = new FileReader();

    

    reader.onload = function (e) {
        var output = document.getElementById("fileOutput");   
        // output.textContent = e.target.result;
        let poop = e.target.result;
        let oppa = poop.split('@');
        //output.textContent = oppa[0];


        let q1 = [];
        let pom = [];

        for(let i = 0; i < oppa.length; i += 1) {
            q1 = oppa[i].split('|');
            pom.push(q1);
        }


        let q2 = 0;
        let q3 = 0;
        let pom2 = [];
        let quick = [];

        qoomba = quick;

        for(let i = 0; i < pom.length; i += 1) {
            let q2 = pom[i][1];
            let q3 = pom[i][6];

            let pom2 = []; 
            pom2.push(q2, q3);

            qoomba.push(pom2);   
        }


        // output.textContent = quick; // отображение надписи на экране



        var dataSet = anychart.data.set(qoomba);


        var firstSeriesData = dataSet.mapAs({x: 0, value: 1});



        const fileUploader = document.getElementById('fileInput');

        fileUploader.addEventListener('change', (event) => {
            const files = event.target.files;
            console.log('files', files);
        });

        








        const chart_3 = anychart.line();
       
        chart_3.line(firstSeriesData).stroke("green");

        

        chart_3.yScale(anychart.scales.linear());
        
        chart_3.yAxis().staggerMode(true);
        chart_3.yAxis().staggerMaxLines(20);
        chart_3.xAxis().title("Время");
        chart_3.yAxis().title("Режим работы");
        chart_3.container("container_4");

        
    
        
        chart_3.draw();
        chart_3.xScroller(true);
        chart_3.yScroller(true);
        
        
        

    };

    reader.readAsText(file);  

};
















// сохранить график реального времени как картинку
function func_save_graph_1() {
    chart.saveAsPng({"width": 1000,
                         "height": 500,
                         "quality": 1,
                         "filename": "График_Реального Времени_1"});
  };









let int_y_temp = 0;

// обработка нажатия кнопки "Масштаб по температуре УВЕЛИЧИТЬ"
function func_y_interval_plus(){
       
    int_y_temp += 1;
    

   

chart.yScale().ticks().interval(int_y_temp);






/*
    var dataSet = anychart.data.set(moomba);


    var firstSeriesData = dataSet.mapAs({x: 0, value: 1});



    const fileUploader = document.getElementById('fileInput');

    fileUploader.addEventListener('change', (event) => {
        const files = event.target.files;
        console.log('files', files);
    });

    


    const chart = anychart.line();
    chart.line(firstSeriesData);
    chart.yScale(anychart.scales.linear());

    chart.yAxis().staggerMode(true);

    chart.yAxis().staggerMaxLines(20);

    

    chart.xAxis().title("Время");
    chart.yAxis().title("Температура");

    int_y_temp += 1;
    chart.yScale().ticks().interval(int_y_temp);


    //chart.title("Временной график температуры");
    chart.container("container");
    chart.draw();

    chart.xScroller(true);
    chart.yScroller(true);
*/


    
    
    

};








const app = () => {
   processFiles(files);


    func_y_interval_plus();






};

app();
