
let report_data = [];
let moomba = [];
var chart;
let speed_warm_test_1;
let tempo11;
let tempo21;
let power1 = [];
let power2 = [];
let mikki;
let warm_temp_1 = [];
let warm_temp_2 = [];

// график "Реальное время"
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
        chart.xGrid(true).yGrid(true);
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


















var toomba = [];



// график "Тестовое время"
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
        let q4 = 0;
        let pom2 = [];
        var quick = [];

        toomba = quick;

        for(let i = 0; i < pom.length; i += 1) {
            let q2 = pom[i][4];
            let q3 = pom[i][3];
          //  let q4 = pom[i][6];

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
        chart_2.xGrid(true).yGrid(true);

       
        series = chart_2.column(firstSeriesData);

        // set custom coloring functions
       // series.fill(coloringFunction_2);

        //chart_2.column(firstSeriesData).stroke("5 red");

        chart_2.yScale().minimum(0).maximum(100);
        chart_2.yScale().ticks().interval(5);

        chart_2.yScale(anychart.scales.linear());
        
        //chart_2.yAxis().staggerMode(true);
        //chart_2.yAxis().staggerMaxLines(20);
        chart_2.xAxis().title("Время");
        chart_2.yAxis().title("Температура");
        chart_2.container("container_3");

        
    
        
        chart_2.draw();
        chart_2.xScroller(true);
        chart_2.yScroller(true);
        
        
        

    };

    reader.readAsText(file);  

};














var qoomba = [];


// график "Диаграмма режимов"
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
        var quick = [];

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

        




//////////////////////////////////
/*
        const chart_3 = anychart.line();
        chart_3.xGrid(true).yGrid(true);

        
           // chart_3.line(firstSeriesData).stroke("green");
        

           
        series = chart_3.line(firstSeriesData);
        series.fill(coloringFunction);
        

        chart_3.yScale(anychart.scales.linear());
        
        chart_3.yAxis().staggerMode(true);
        chart_3.yAxis().staggerMaxLines(20);
        chart_3.xAxis().title("Время");
        chart_3.yAxis().title("Режим работы");
        chart_3.container("container_4");

        
        chart_3.draw();
        chart_3.xScroller(true);
        chart_3.yScroller(true);
        */
        //////////////////////////////
        

        // set the chart type
    var chart_3 = anychart.column();
    chart_3.xGrid(true).yGrid(true);

    // set the series type and data
    series = chart_3.column(qoomba);

    // set custom coloring functions
    series.fill(coloringFunction);
    //series.stroke('1 Black');

    chart_3.yScale(anychart.scales.linear());
        
    chart_3.yScale().minimum(0).maximum(5);
    chart_3.yScale().ticks().interval(1);

    //chart_3.yAxis().staggerMode(true);
    //chart_3.yAxis().staggerMaxLines(10);
    chart_3.xAxis().title("Время");
    chart_3.yAxis().title("Режим работы");
    chart_3.container("container_4");

    // initiate drawing the chart
    chart_3.draw();
    chart_3.xScroller(true);
    //chart_3.yScroller(true);



    };

    reader.readAsText(file);  

};



















// custom color function
function coloringFunction() {

    // color the maximal value
   // if (this.value == this.series.getStat('seriesMax')) return '#94353C';
  
    // color elements depending on the argument
    var x = this.value;

    if (x == '0') {
        return '#000000';
    }

    if (x == '1') {
        return '#FF0000';
    } 
    
    if (x == '2') {
        return '#FF4500';
    }
    
    if (x == '3') {
        return '#0000FF';
    }

    if (x == '4') {
        return '#00FFFF';
    }

    if (x == '5') {
        return '#FFC0CB';
    }
  
    // get the default otherwise
    return this.sourceColor;
  }














  // custom color function
function coloringFunction_2() {

    // color the maximal value
   // if (this.value == this.series.getStat('seriesMax')) return '#94353C';
  
    // color elements depending on the argument
    var x = this.toomba[2];
    if (x == '0') {
        return '#000000';
    }

    if (x == '1') {
        return '#FF0000';
    } 
    
    if (x == '2') {
        return '#FF4500';
    }
    
    if (x == '3') {
        return '#0000FF';
    }

    if (x == '4') {
        return '#00FFFF';
    }

    if (x == '5') {
        return '#FFC0CB';
    }
  
    // get the default otherwise
    return this.sourceColor;
  }







/*
// custom color function
function coloringFunction() {

    // color elements depending on the argument
    var x = this.x;
    //if  ((x == 'Jan') || (x == 'Feb') || (x == 'Dec')) return '#B2E3E8';
    //if  ((x == 'Jul') || (x == 'Jun') || (x == 'Aug')) return '#D94330';
    if (x == 'Nov') {
        return '#FF0000';
    } else if (x == 'Oct') {
        return '#FF4500';
    } else if (x == 'Jan') {
        return '#0000FF';
    }
  
    // get the default otherwise
    return this.sourceColor;
  }

*/






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

};

























let info_aqua = [];
let name_of_test_code = [];  // тип испытания (код)
let name_of_test = "";  // тип испытания (расшифровка)
let test_time_code = "";  // длительность испытания
let test_max_temp = ""; // заданная максимальная температура нагрева 
let max_time_warm = ""; // заданное максимальная время нагрева
let max_time_cold = ""; // заданное максимальная время продувки
let complete_cycles = ""; // выполненное количество циклов
let fact_test_time = ""; // фактическое время испытания
let time_of_no_line = ""; // длительность отключения сети
let middle_speed_of_warm = ""; // средняя скорость нагрева
let middle_speed_of_cold = ""; // средняя скорость охлаждения

let date_start_test = "";  // дата начала испытания
let time_start_test = "";  // время начала испытания
let date_end_test = "";  // дата окончания испытания
let time_end_test = "";  // время окончания испытания


// вычисление данных при загрузке файла для формирования отчёта в разделе "Параметры испытания"
function processFiles_4(files) {
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


        //report_data = quick;

        for(let i = 0; i < pom.length; i += 1) {
            let q2 = pom[i][1];
            let q3 = pom[i][3];

            let pom2 = []; 
            pom2.push(q2, q3);

            report_data.push(pom2);   
        }



        mikki = Number(pom.length - 2);
        


        // Наименование типа испытания
        name_of_test_code = pom[1][10];
        if (name_of_test_code === "1") {
            name_of_test = "термоциклирование";
        } else {
            name_of_test = "испытание на нагрев";
        }


        // Заданная длительность испытания
        test_time_code = pom[1][11];
        let poaq = Number(test_time_code) * 60;
        test_time_code = String(poaq);

        // Заданная максимальная температура
        test_max_temp = pom[1][12];

        // Заданное время поддержания нагрева
        max_time_warm = pom[1][13];

        // Заданное время поддержания продувки
        max_time_cold = pom[1][14];

        // Выполненное количество циклов (в режиме ТЕРМОЦИКЛИРОВАНИЕ)
        complete_cycles = Number(pom[mikki][8]);
        complete_cycles += 1;

        // Фактическое время испытания
        fact_test_time = pom[mikki][4];

        // Длительность отключения сети
        time_of_no_line = pom[mikki][7];

        // Дата и время начала испытаний
        date_start_test = pom[1][0];
        time_start_test = pom[1][1];

        // Дата и время окончания испытания
        date_end_test = pom[pom.length - 2][0];
        time_end_test = pom[pom.length - 2][1];










               /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // рассчитываем среднее время НАГРЕВА в режиме "ТЕРМОЦИКЛИРОВАНИЕ"
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





                for (let i = 0; i < pom.length; i += 1)
                {
                    if ((pom[i][10] === 1) && (pom[i][6] === 0))
                    {
                       
                        power1.push(pom[i][1]);
                        warm_temp_1.push(pom[i][3]);
                    }
/*
                    if ((y7[i] == 5) && (y6[i] == 0))
                    {
                        power1.Add(x7[i]);
                        warm_temp_1.Add(y8[i]);
                    }
*/
          
                }




                let length_power1 = power1.length;
            //    length_power2 = power2.Count;

                let length_warm_temp_1 = warm_temp_1.length;
            //    length_warm_temp_2 = warm_temp_2.Count;


                let amma11 = power1[0];
                let amma12 = 0;

                let cool_mount = [];
                
                let info_max_temp_warming = pom[1][12];  // заданная максимальная температура нагрева
                for (let i = 0; i < power1.length; i += 1)
                {
                    if (pom[i][12] === info_max_temp_warming) 
                    {
                        cool_mount = power1[i];
                        break;
                    }
                }

               // keep_going:

                if (y7[0] == 5)
                {
                    amma12 = cool_mount;
                }
                else
                {
                    amma12 = power1[length_power1 - 2];
                }
                    

                tempo11 = warm_temp_1[0];
                tempo21 = warm_temp_1[length_warm_temp_1 - 1];

                let dateTime_min1 = new Date(amma11);
                let dateTime_max1 = new Date(amma12);
                let diff_time_power1 = dateTime_max1 - dateTime_min1;


                let diff_amma1 = String(dateTime_max1 - dateTime_min1);
                let diff_tempo1 = tempo21 - tempo11;


                let seco_power1 = Number(diff_time_power1.TotalMinutes);
                let double_seco_power1 = Number(diff_tempo1 / seco_power1);
                speed_warm_test_1 = Number(double_seco_power1);
                



        // Средняя скорость нагрева


        // Средняя скорость охлаждения









    };

    reader.readAsText(file);  

};













// сформировать отчёт в разделе "Параметры испытания"
function func_make_report() {


document.getElementById('name_of_test').value = name_of_test;
document.getElementById('test_time').value = test_time_code;
document.getElementById('test_max_temp').value =  test_max_temp;
document.getElementById('test_time_warm').value = max_time_warm;
document.getElementById('test_time_cold').value = max_time_cold;
document.getElementById('complete_cycles').value = complete_cycles;
document.getElementById('fact_test_time').value = fact_test_time;
document.getElementById('time_of_no_line').value = time_of_no_line;

document.getElementById('data_start_testing').value = date_start_test;
document.getElementById('time_start_testing').value = time_start_test;
document.getElementById('data_stop_testing').value = date_end_test;
document.getElementById('time_stop_testing').value = time_end_test;

document.getElementById('middle_speed_of_warm').value =  speed_warm_test_1;
console.log(power1);
console.log(warm_temp_1);


};






const app = () => {
   processFiles(files);
   //func_make_report();

    func_y_interval_plus();






};

app();
